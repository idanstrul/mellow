//import { syncStorageService } from "./storage.service.sync.js"
//import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { httpService } from "./http.service.js"


//const STORAGE_KEY = 'boardDB'

export const boardService = {
    query,
    getById,
    remove,
    save,
    getEmptyBoard,
    getEmptyTask,
    getEmptyGroup,
}

const defaultBoards = [
    {
        "_id": "b101",
        "title": "Robot dev proj",
        "createdAt": 1589983468418,
        "createdBy": {
            "_id": "u101",
            "fullname": "Puki Norma",
            "imgUrl": "http://some-img"
        },
        "style": {
            "bg": '../../src/assets/bg2.jpg',

        },
        "labels": [
            {
                "id": "l101",
                "title": "Done",
                "color": "#61bd4f"
            },
            {
                "id": "l102",
                "title": "Progress",
                "color": "#f2d600"
            },
            {
                "id": "l103",
                "title": "Urgent",
                "color": "#ff9f1a"
            },
            {
                "id": "l104",
                "title": "Production",
                "color": "#eb5a46"
            },
            {
                "id": "l105",
                "title": "Developmnet",
                "color": "#c377e0"
            },
            {
                "id": "l106",
                "title": "",
                "color": "#0079bf"
            },
            {
                "id": "l107",
                "title": "",
                "color": "#00c2e0"
            },
            {
                "id": "l108",
                "title": "",
                "color": "#51e898"
            },
            {
                "id": "l109",
                "title": "",
                "color": "#ff78cb"
            },
            {
                "id": "l110",
                "title": "",
                "color": "#344563"
            },
        ],
        "members": [
            {
                "_id": "u101",
                "username": "Tal",
                "fullname": "Tal Tarablus",
                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
            },
            {
                "_id": "u328",
                "username": "Amit",
                "fullname": "Amit Miz",
                "color": "#00875a"

            },
            {
                "_id": "u439",
                "username": "Idan",
                "fullname": "Idan Stru",
                "color": "#aa0d0d"

            },
            {
                "_id": "u429",
                "username": "Omer",
                "fullname": "Omer Esh",
                "color": "#5243aa"

            },
        ],
        "groups": [
            {
                "id": "g101",
                "title": "Backlog",
                "tasks": [
                    {
                        "id": "c101",
                        "title": "Users Management",
                        labelIds: ["l104", "l105", "l106", "l107", "l108", "l109", "l110"],
                        "members": [
                            {
                                "_id": "u101",
                                "username": "Tal",
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            },
                            {
                                "_id": "u328",
                                "username": "Amit",
                                "fullname": "Amit Miz",
                                "color": "#00875a"

                            },
                            {
                                "_id": "u439",
                                "username": "Idan",
                                "fullname": "Idan Stru",
                                "color": "#aa0d0d"

                            },
                            {
                                "_id": "u429",
                                "username": "Omer",
                                "fullname": "Omer Esh",
                                "color": "#5243aa"

                            },
                        ],
                        "startDate": 16156211111,
                    },
                    {
                        "id": "c102",
                        "title": "Report Generator",
                        "dueDate": 1648587536553,
                        labelIds: ["l108", "l109", "l102"]
                    }
                ],
                "style": {}
            },
            {
                "id": "g102",
                "title": "Working On",
                "tasks": [
                    {
                        "id": "c103",
                        "title": "Tweet System"
                    },
                    {
                        "id": "c104",
                        "title": "File Management",
                        "status": "in-progress",
                        "description": "description",
                        "comments": [
                            {
                                "id": "ZdPnm",
                                "txt": "also @yaronb please CR this",
                                "createdAt": 1590999817436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "members": [
                            {
                                "_id": "u101",
                                "username": "Tal",
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            },
                            {
                                "_id": "u328",
                                "username": "Amit",
                                "fullname": "Amit Miz",
                                "color": "#00875a"

                            },
                            {
                                "_id": "u785",
                                "username": "Puki",
                                "fullname": "Puki Norma",
                                "color": "purple"

                            },
                        ],
                        "labelIds": ["l101", "l106", "l108", "l103"],
                        "createdAt": 1590999730348,
                        "startDate": 16156211111,
                        "dueDate": 1648655802996,
                        "byMember": {
                            "_id": "u101",
                            "username": "Tal",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        },
                        "style": {
                            "bgColor": "#26de81"
                        }
                    },
                    {
                        "id": "c114",
                        "title": "Design Grid",
                        "status": "",
                        "description": "description",
                        "comments": [
                            {
                                "id": "ZdPnm",
                                "txt": "also @yaronb please CR this",
                                "createdAt": 1590999817436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],

                        "labelIds": ["l101", "l102"],
                        "createdAt": 1590999730348,
                        "dueDate": 1648489253250,
                        "byMember": {
                            "_id": "u101",
                            "username": "Tal",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        },
                        "style": {
                            "bgColor": "#26de81"
                        }
                    },
                    {
                        "id": "c124",
                        "title": "Finish drag&drop",
                        "status": "in-progress",
                        "description": "description",
                        "comments": [
                            {
                                "id": "ZdPnm",
                                "txt": "also @yaronb please CR this",
                                "createdAt": 1590999817436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "members": [
                            {
                                "_id": "u101",
                                "username": "Tal",
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            },
                            {
                                "_id": "u328",
                                "username": "Amit",
                                "fullname": "Amit Miz",
                                "color": "#00875a"

                            },
                            {
                                "_id": "u429",
                                "username": "Omer",
                                "fullname": "Omer Esh",
                                "color": "#5243aa"

                            },
                            {
                                "_id": "u785",
                                "username": "Puki",
                                "fullname": "Puki Norma",
                                "color": "purple"

                            },
                        ],
                        "labelIds": ["l101", "l102"],
                        "createdAt": 1590999730348,
                        "dueDate": 16156215211,
                        "byMember": {
                            "_id": "u101",
                            "username": "Tal",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        },
                        "style": {
                            "bgColor": "#26de81"
                        }
                    },
                    {
                        "id": "c134",
                        "title": "Responsive design",
                        "status": "in-progress",
                        "description": "description",
                        "comments": [
                            {
                                "id": "ZdPnm",
                                "txt": "also @yaronb please CR this",
                                "createdAt": 1590999817436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "members": [
                            {
                                "_id": "u439",
                                "username": "Idan",
                                "fullname": "Idan Stru",
                                "color": "#aa0d0d"

                            },
                            {
                                "_id": "u429",
                                "username": "Omer",
                                "fullname": "Omer Esh",
                                "color": "#5243aa"

                            },
                            {
                                "_id": "u785",
                                "username": "Puki",
                                "fullname": "Puki Norma",
                                "color": "purple"

                            },
                        ],
                        "labelIds": ["l102"],
                        "createdAt": 1590999730348,
                        "dueDate": 1652809253250,
                        "byMember": {
                            "_id": "u101",
                            "username": "Tal",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        },
                        "style": {
                            "bgColor": "#26de81"
                        }
                    },
                ],
                "style": {}
            },
            {
                "id": "g103",
                "title": "Bugs",
                "tasks": [
                    {
                        "id": "c105",
                        "title": "Replace logo",
                        "members": [
                            {
                                "_id": "u101",
                                "username": "Tal",
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            },
                            {
                                "_id": "u328",
                                "username": "Amit",
                                "fullname": "Amit Miz",
                                "color": "#00875a"

                            },
                            {
                                "_id": "u439",
                                "username": "Idan",
                                "fullname": "Idan Stru",
                                "color": "#aa0d0d"

                            },
                            {
                                "_id": "u429",
                                "username": "Omer",
                                "fullname": "Omer Esh",
                                "color": "#5243aa"

                            },
                        ],
                    },
                    {
                        "id": "c106",
                        "title": "Add Samples"
                    }
                ],
                "style": {}
            },
            {
                "id": "g104",
                "title": "Done",
                "tasks": [
                    {
                        "id": "c107",
                        "title": "Board design"
                    },
                    {
                        "id": "c108",
                        "title": "Task preview",
                        "status": "in-progress",
                        "description": "description",
                        "comments": [
                            {
                                "id": "ZdPnm",
                                "txt": "also @yaronb please CR this",
                                "createdAt": 1590999817436.0,
                                "byMember": {
                                    "_id": "u101",
                                    "fullname": "Tal Tarablus",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                }
                            }
                        ],
                        "checklists": [
                            {
                                "id": "YEhmF",
                                "title": "Checklist",
                                "todos": [
                                    {
                                        "id": "212jX",
                                        "title": "To Do 1",
                                        "isDone": false
                                    }
                                ]
                            }
                        ],
                        "members": [
                            {
                                "_id": "u101",
                                "username": "Tal",
                                "fullname": "Tal Tarablus",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            },
                            {
                                "_id": "u328",
                                "username": "Amit",
                                "fullname": "Amit Miz",
                                "color": "#00875a"

                            }
                        ],
                        "labelIds": ["l101", "l102"],
                        "createdAt": 1590999730348,
                        "dueDate": 16156215211,
                        "byMember": {
                            "_id": "u101",
                            "username": "Tal",
                            "fullname": "Tal Tarablus",
                            "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                        },
                        "style": {
                            "bgColor": "#26de81"
                        }
                    }
                ],
                "style": {}
            }
        ],
        "activities": [
            {
                "id": "a101",
                "txt": "Changed Color",
                "createdAt": 154514,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "http://some-img"
                },
                "task": {
                    "id": "c101",
                    "title": "Replace Logo"
                }
            }
        ],
    }
]

//_createBoards()


//BOARD CRUD

async function query() {
    //return await storageService.query(STORAGE_KEY)
    try {
        const boards = await httpService.get('board')
        return boards

    } catch (err) {
        console.log('query had an error', err);
    }
}

async function getById(boardId) {
    //return await storageService.get(STORAGE_KEY, boardId)
    try {
        const board = await httpService.get(`board/${boardId}`)
        return board
    } catch (err) {
        console.log('Error:', err);
    }
}

async function remove(boardId) {
    //return storageService.remove(STORAGE_KEY, boardId)
    try {
        const board = await httpService.get(`board/${boardId}`)
        return board
    } catch (err) {
        console.log('Error:', err);
    }
}

async function save(board) {
    // const boardToSave = JSON.parse(JSON.stringify(board))
    // console.log(board);
    // if (boardToSave._id) return storageService.put(STORAGE_KEY, boardToSave);
    // return storageService.post(STORAGE_KEY, boardToSave)
    try {
        // debugger
        if (board._id) {
            const savedBoard = await httpService.put(`board`, board)
            return savedBoard
        } else {
            const savedBoard = await httpService.post(`board`, board)
            return savedBoard
        }
    } catch (err) {
        console.log('Error:', err);
    }
}

async function getEmptyBoard() {
    return {
        "title": "",
        "createdAt": Date.now(),
        "createdBy": {},
        "style": {
            "bgImg": [
                '../../src/assets/bg.jpg',
                '../../src/assets/bg1.jpg',
                '../../src/assets/bg2.jpg',
                '../../src/assets/bg3.jpg',
                '../../src/assets/bg4.jpg',
                '../../src/assets/bg5.jpg',
                '../../src/assets/bg6.jpg',
                '../../src/assets/bg7.jpg',
                '#0079bf',
                '#d29034',
                '#519839',
                '#b04632',
                '#89609e',
                '#cd5a91',
                '#4bbf6b',
                '#00aecc',
            ],

        },
        "labels": [
            {
                "id": "l101",
                "title": "",
                "color": "#61bd4f"
            },
            {
                "id": "l102",
                "title": "",
                "color": "#f2d600"
            },
            {
                "id": "l103",
                "title": "",
                "color": "#ff9f1a"
            },
            {
                "id": "l104",
                "title": "",
                "color": "#eb5a46"
            },
            {
                "id": "l105",
                "title": "",
                "color": "#c377e0"
            },
            {
                "id": "l106",
                "title": "",
                "color": "#0079bf"
            },
            {
                "id": "l107",
                "title": "",
                "color": "#00c2e0"
            },
            {
                "id": "l108",
                "title": "",
                "color": "#51e898"
            },
            {
                "id": "l109",
                "title": "",
                "color": "#ff78cb"
            },
            {
                "id": "l110",
                "title": "",
                "color": "#344563"
            },
        ],
        "members": [],
        "groups": [],
        "activities": [],

    }
}

/*function _createBoards() {
    var boards = syncStorageService.load(STORAGE_KEY)
    if (!boards || !boards.length) {
        boards = defaultBoards
        syncStorageService.store(STORAGE_KEY, boards)
    }
    return boards;
}*/


//GROUP CRUD: 
function getEmptyGroup() {
    return {
        "id": "",
        "title": "",
        "tasks": [],
        "style": {}
    }
}

//TASK CRUD:
function getEmptyTask() {
    const { _id, fullname, imgUrl } = userService.getLoggedinUser()
    return {
        "id": utilService.makeId(),
        "title": "",
        "status": "",
        "description": "",
        "createdAt": Date.now(),
        "dueDate": null,
        "byMember": {
            _id,
            fullname,
            imgUrl
        },
    }
}

// async function saveTask(task) {
//     const taskToSave = JSON.parse(JSON.stringify(task))
//     if (taskToSave._id) return storageService.putTask(STORAGE_KEY, taskToSave);
//     return storageService.postTask(STORAGE_KEY, taskToSave)

// }