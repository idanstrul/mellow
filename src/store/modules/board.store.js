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
        }
    },
    mutations: {
        setCurrBoard(state, { currBoard }) {
            state.currBoard = currBoard
        }
    },
    actions: {
        async loadCurrBoard(context, { boardId }) {
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            try {
                const currBoard = await boardService.getById(boardId)
                context.commit({ type: 'setCurrBoard', currBoard })
                return JSON.parse(JSON.stringify(currBoard))
                // return currBoard
                // context.dispatch({type: 'flashUserMsg', msg: 'Toys loaded successfully', style: 'success' })
            }
            catch (err) {
                console.error('Cannot load currBoard: ', err);
                context.dispatch({ type: 'flashUserMsg', msg: 'Oops! Cannot load selected board...', style: 'warning' })
            }
            finally {
                context.commit({ type: 'setIsLoading', loadingStatus: false })
            }
        },
        async saveCurrBoard(context) {
            context.commit({ type: 'setIsLoading', loadingStatus: true })
            try {
                const currBoard = await boardService.save(context.getters.currBoard)
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
        }
    }
}