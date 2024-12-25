let games = [
    { id: '1', titles:'Zelda, Tears of the Kingdom', platform:['Switch']},
    { id: '2', title: 'Final Fantasy 7 REmake', platform: ['PSS','Xbox']},
    { id: '3', title: 'Elden Ring', Platforms: ['PSS', 'Xbox','PC']},
    { id: '4', title: ' Mario Kart', platform: ['Switch']},
    { id: '5', title: 'Pokemon Scarlet', platform:[ 'PSS', 'Xbox','PC']},

]
let authors =[
    {id: '1', name: 'mario', verified: true},
    {id: '2', name: 'yoshi', verified: false},
    {id: '3', name: 'peach', verified: true},
]
let reviews =[
    {id: '1', rating: 9, content: 'lorem ipsum',author_id: '1', game_id: '2'},
    {id: '2', rating: 10, content: 'lorem ipsum',author_id: '1', game_id: '2'},
    {id: '3', rating: 7, content: 'lorem ipsum',author_id: '1', game_id: '2'},
    {id: '4', rating: 5, content: 'lorem ipsum',author_id: '1', game_id: '2'},
    {id: '5', rating: 8, content: 'lorem ipsum',author_id: '1', game_id: '2'},
    {id: '6', rating: 7, content: 'lorem ipsum',author_id: '1', game_id: '2'},
    {id: '7', rating: 10, content: 'lorem ipsum',author_id: '1', game_id: '2'},
]

export default {games, authors, reviews}