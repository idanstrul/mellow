import { boardService } from "../../services/board.service";
import { utilService } from "../../services/util.service";

export const boardStore = {
    state: {
        boards: [], //maybe there will be no need for this
        currBoard: null,
        recentBoards: [],
    },
    getters: {
        boards(state) {
            return JSON.parse(JSON.stringify(state.boards)) //maybe there will be no need for this
        },
        currBoard(state) {
            return JSON.parse(JSON.stringify(state.currBoard))
        },
        currBoardLabels(state) {
            return JSON.parse(JSON.stringify(state.currBoard.labels))
        },
        recentBoards({ recentBoards }) { return recentBoards },
        cardEdit({ cardEdit }) { return cardEdit },
        boardsToShow(state) {
            let regex = new RegExp(state.filterBy.txt, 'i')
            return state.boards.filter(board => {
                return regex.test(board.title)
            })
        },
    },
    mutations: {
        setCurrBoard(state, { currBoard }) {
            state.currBoard = currBoard
        },
        addBoardToRecentBoards(state, { board }) {
            if (state.recentBoards.length >= 5) state.recentBoards.pop()
            state.recentBoards = state.recentBoards.filter(currBoard =>
                currBoard._id !== board._id)
            state.recentBoards.unshift(board)
        },
    },
    actions: {
        async loadCurrBoard(context, { boardId }) {
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            try {
                const currBoard = await boardService.getById(boardId)
                context.commit({ type: 'setCurrBoard', currBoard })
                return JSON.parse(JSON.stringify(currBoard))
            }
            catch (err) {
                console.error('Cannot load currBoard: ', err);
                context.dispatch({ type: 'flashUserMsg', msg: 'Oops! Cannot load selected board...', style: 'warning' })
            }
            finally {
                context.commit({ type: 'setIsLoading', loadingStatus: false })
            }
        },
        async saveCurrBoard(context, { boardToSave }) {
            console.log(boardToSave);
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            try {
                const currBoard = await boardService.save(boardToSave)
                context.commit({ type: 'setCurrBoard', currBoard: boardToSave })
                context.dispatch({ type: 'flashUserMsg', msg: `Board ${currBoard._Id} saved successfully`, style: 'success' })
                return currBoard
            }
            catch (err) {
                console.error(`Cannot save board ${context.getters.currBoard._Id}: `, err)
                context.dispatch({ type: 'flashUserMsg', msg: `Oops! Cannot save board ${context.getters.currBoard._Id}...`, style: 'warning' })
            }
            finally {
                context.commit({ type: 'setIsLoading', loadingStatus: false })
            }
        },
        async updateGroup(context, { groupToSave }) {
            console.log(groupToSave);
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            try {
                const board = context.getters.currBoard
                if (groupToSave.id) {
                    const idx = board.groups.findIndex(g => g.id === groupToSave.id)
                    board.groups.splice(idx, 1, groupToSave)
                    console.log('board>>', board, 'group>>', groupToSave);
                } else {
                    groupToSave.id = utilService.makeId()
                    board.groups.push(groupToSave)
                }
                const currBoard = await context.dispatch({ type: 'saveCurrBoard', boardToSave: board })
                return currBoard
            }
            catch (err) {
                console.error(`Cannot save group ${context.getters.currBoard._Id}: `, err)
                context.dispatch({ type: 'flashUserMsg', msg: `Oops! Cannot save board ${context.getters.currBoard._Id}...`, style: 'warning' })
            }
            finally {
                context.commit({ type: 'setIsLoading', loadingStatus: false })
            }
        },
        async copyGroup(context, { groupToSave }) {
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            try {
                groupToSave.id = utilService.makeId()
                console.log(context.getters.currBoard);
                const board = context.getters.currBoard
                board.groups.push(groupToSave)
                console.log(board);
                return await context.dispatch({ type: 'saveCurrBoard', boardToSave: board })
                // console.log(this.currBoard);
                // this.currBoard.groups.push(groupToSave)
            }
            catch (err) {
                console.error(`Cannot save group ${context.getters.currBoard._Id}: `, err)
                context.dispatch({ type: 'flashUserMsg', msg: `Oops! Cannot save board ${context.getters.currBoard._Id}...`, style: 'warning' })
            }
            finally {
                context.commit({ type: 'setIsLoading', loadingStatus: false })
            }
        },
        async getEmptyBoard(context) {
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            try {
                return boardService.getEmptyBoard()
            }
            catch {
                console.error(`Cannot get empty board: `, err)
                context.dispatch({ type: 'flashUserMsg', msg: `Oops! Cannot initiate a new board...`, style: 'warning' })
            }
            finally {
                context.commit({ type: 'setIsLoading', loadingStatus: false })
            }
        },
        async getTaskById({ getters }, { groupId, taskId }) {
            const currBoard = getters.currBoard
            const currGroup = currBoard.groups.find(g => g.id === groupId)
            console.log('taskId', taskId);
            console.log('groupId', groupId);
            console.log('currGroup', currGroup);
            const currTask = currGroup.tasks.find(t => t.id === taskId)
            return currTask

        }
    }
}