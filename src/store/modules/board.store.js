import { boardService } from "../../services/board.service";

export const boardStore = {
    state: {
        boards: [], //maybe there will be no need for this
        currBoard: null
    },
    getters: {
        boards(state) {
            return JSON.parse(JSON.stringify(state.boards)) //maybe there will be no need for this
        },
        currBoard(state) {
            return JSON.parse(JSON.stringify(state.currBoard))
        },
        currBoardLabels(state){
            return JSON.parse(JSON.stringify(state.currBoard.labels))
        }
    },
    mutations: {
        setCurrBoard(state, { currBoard }) {
            state.currBoard = currBoard
        }
    },
    actions: {
        async loadCurrBoard({ commit, dispatch }, { boardId }) {
            commit({ type: 'setIsLoading', loadingStatus: true })
            try {
                const currBoard = await boardService.getById(boardId)
                commit({ type: 'setCurrBoard', currBoard })
                return JSON.parse(JSON.stringify(currBoard))
                return currBoard
                // context.dispatch({type: 'flashUserMsg', msg: 'Toys loaded successfully', style: 'success' })
            }
            catch (err) {
                console.error('Cannot load currBoard: ', err);
                dispatch({ type: 'flashUserMsg', msg: 'Oops! Cannot load selected board...', style: 'warning' })
            }
            finally {
                commit({ type: 'setIsLoading', loadingStatus: false })
            }
        },
        async saveCurrBoard({ commit, dispatch }, { boardToSave }) {
            commit({ type: 'setIsLoading', loadingStatus: true })
            try {
                const currBoard = await boardService.save(boardToSave)
                commit({ type: 'setCurrBoard', currBoard: boardToSave })
                dispatch({ type: 'flashUserMsg', msg: `Board ${currBoard._Id} saved successfully`, style: 'success' })
                return currBoard
            }
            catch (err) {
                console.error(`Cannot save board ${context.getters.currBoard._Id}: `, err)
                dispatch({ type: 'flashUserMsg', msg: `Oops! Cannot save board ${context.getters.currBoard._Id}...`, style: 'warning' })
            }
            finally {
                commit({ type: 'setIsLoading', loadingStatus: false })
            }
        },
        async getEmptyBoard({ commit, dispatch }) {
            commit({ type: 'setIsLoading', loadingStatus: true })
            try {
                return boardService.getEmptyBoard()
            }
            catch {
                console.error(`Cannot get empty board: `, err)
                dispatch({ type: 'flashUserMsg', msg: `Oops! Cannot initiate a new board...`, style: 'warning' })
            }
            finally {
                commit({ type: 'setIsLoading', loadingStatus: false })
            }
        },
        async getTaskById({getters}, {groupId, taskId}){
            const currBoard = getters.currBoard
            const currGroup = currBoard.groups.find(g => g.id === groupId)
            console.log('taskId',taskId);
            console.log('groupId',groupId);
            console.log('currGroup',currGroup);
            const currTask = currGroup.tasks.find(t => t.id === taskId)
            return currTask
            
        }
    }
}