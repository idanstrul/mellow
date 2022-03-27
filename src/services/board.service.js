import { syncStorageService } from "./storage.service.sync.js"
import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'boardDB'

export const boardService = {
    query,
    getById,
    remove,
    save,
    getEmptyBoard,
    getEmptyTask,
    getEmptyGroup
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
        "style": {},
        "labels": [
            {
                "id": "l101",
                "title": "Done",
                "color": "#61bd4f"
            },
            {
                "id": "l102",
                "title": "Progress",
                "color": "#61bd33"
            }
        ],
        "members": [
            {
                "_id": "u101",
                "fullname": "Tal Tarablus",
                "imgUrl": "https://www.google.com"
            }
        ],
        "groups": [
            {
                "id": "g101",
                "title": "Backlog",
                "tasks": [
                    {
                        "id": "c101",
                        "title": "Users Management",
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
                                "color": "#0909a8"

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
                                "color": "#07912a"

                            },
                        ],
                    },
                    {
                        "id": "c102",
                        "title": "Report Generator"
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
                                "color": "#0909a8"

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
                        "id": "c114",
                        "title": "Design Grid",
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
                                "color": "#0909a8"

                            },
                            {
                                "_id": "u429",
                                "username": "Omer",
                                "fullname": "Omer Esh",
                                "color": "#07912a"

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
                                "color": "#07912a"

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
                                "color": "#0909a8"

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
                                "color": "#07912a"

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
                                "color": "#0909a8"

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

_createBoards()


//BOARD CRUD

async function query() {
    return await storageService.query(STORAGE_KEY)
}

async function getById(boardId) {
    return storageService.get(STORAGE_KEY, boardId)
}

async function remove(boardId) {
    return storageService.remove(STORAGE_KEY, boardId)
}

async function save(board) {
    const boardToSave = JSON.parse(JSON.stringify(board))
    if (boardToSave._id) return storageService.put(STORAGE_KEY, boardToSave);
    return storageService.post(STORAGE_KEY, boardToSave)
}

async function saveGroup() {

}

async function getEmptyBoard() {
    return {
        "_id": "",
        "title": "",
        "createdAt": Date.now(),
        "createdBy": {},
        "style": {},
        "labels": [],
        "members": [],
        "groups": [],
        "activities": [],
    }
}

function _createBoards() {
    var boards = syncStorageService.load(STORAGE_KEY)
    if (!boards || !boards.length) {
        boards = defaultBoards
        syncStorageService.store(STORAGE_KEY, boards)
    }
    return boards;
}


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