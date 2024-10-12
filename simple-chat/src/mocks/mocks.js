import '../image/image-default.png';

const defaultPathAvatar = '../image/image-default.png'
export const chatsMocks = [
    {
        id: '1',
        author: 'Дженнифер',
        avatar: defaultPathAvatar,
        messages: [
            {text: 'Привет, как дела?', timestamp: new Date('2024-09-21T22:13:10-10:12')},
            {text: 'У тебя есть свободное время?', timestamp: new Date('2024-10-21T22:14:30-04:12')},
        ],
        isReadability: false,
    },
    {
        id: '2',
        author: 'Эшли',
        avatar: defaultPathAvatar,
        messages: [
            {text: 'Приходи на тусовку', timestamp: new Date('2024-04-21T22:15:45-04:12')},
        ],
        isReadability: true,
    },
    {
        id: '3',
        author: 'Сэм',
        avatar: defaultPathAvatar,
        messages: [
            {text: 'Недавно такую тачку себе купил', timestamp: new Date('2024-09-21T22:13:10-04:12')},
            {text: 'Воообще улёт', timestamp: new Date('2024-10-21T22:14:30-04:12')},
            {text: 'Ставлю лайк', timestamp: new Date('2024-10-22T22:15:45-04:12')},
        ],
        isReadability: true,
    },
    {
        id: '4',
        author: 'Айрат',
        avatar: defaultPathAvatar,
        messages: [
            {text: 'Открываю двери без ключа', timestamp: new Date('2024-09-21T22:13:10-04:12')},
            {text: 'ча ча ча ча', timestamp: new Date('2024-10-21T22:14:30-04:12')},
        ],
        isReadability: true,
    },
    {
        id: '5',
        author: 'Айнура',
        avatar: defaultPathAvatar,
        messages: [
            {text: 'Ты смотрел кухню?', timestamp: new Date('2024-09-21T22:13:10-04:12')},
        ],
        isReadability: false,
    }
];