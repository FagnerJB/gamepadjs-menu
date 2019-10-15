var last = 0,
  allShows = {
    "originals":[
        {
            "name": "Europair: New Old World",
            "desc": "Simon Deschamps is the brand-new journalist hired by the most important newspaper in all Europe, L’ascendant, the constitutional second power in France.",
            "seasons": 3,
            "img": "europair"
        },
        {
            "name": "Dewey in D.C.",
            "desc": "Dewey Wilkerson (Erik Per Sullivan), now a Republican congressman from California, does not measure efforts to ascend in power as a far-right leader and revenge who mistreat him in his childhood.",
            "seasons": 1,
            "img": "dewey-dc"
        },
        {
            "name": "Warld",
            "desc": "In the post-WWIII, mega-corporations rule the decadent and dejected world, with no more governments or religions.",
            "seasons": 3,
            "img": "warld"
        },
        {
            "name": "Fag & Cat",
            "desc": "A young couple has to adopt three foreign children under unexpected circumstances.",
            "seasons": 1,
            "img": "fag-cat"
        },
        {
            "name": "Human-ode",
            "desc": "The arrival of a new generation of androids treats the existence of old models, while humans have to find their utility in this autonomous society.",
            "seasons": 1,
            "img": "human-ode"
        }
    ],
    "movies":[
        {
            "name": "The Truman Life",
            "desc": "Truman Burbank (Jim Carrey) has to deal with the huge fame, trying to live a normal life with Sylvia.",
            "img": "truman-life"
        },
        {
            "name": "Hanibal: A Christmas Special",
            "desc": "In their first Christmas as a couple, Will Graham and Dr. Hannibal Lecter host a very unusual party.",
            "img": "hannibal"
        },
        {
            "name": "Mathilda: The Professional",
            "desc": "Mathilda (Natalie Portman), an expert migration lawyer, fights Trump's government heartless policies.",
            "img": "mathilda"
        },
        {
            "name": "Mother!",
            "desc": "A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.",
            "img": "mother"
        },
        {
            "name": "INS Shakditya",
            "desc": "Trabschian Rakir (Aamir Khan) is the commander of the biggest ship in Indic Ocean, the last resource of defense of his country against the New American Empire.",
            "img": "ins"
        }
    ],
    "tvshows":[
        {
            "name": "Dirk Gently's Holistic Detective Agency",
            "desc": "Holistic detective Dirk Gently (Samuel Barnett) investigates cases involving the supernatural.",
            "seasons": 3,
            "img": "dirk-gntlys-holistic-agency"
        },
        {
            "name": "BrainDead",
            "desc": "Mary Elizabeth Winstead is a government employee, who discovers that the cause of the tensions between the two political parties is a race of extraterrestrial insects eating the brains of the politicians.",
            "seasons": 2,
            "img": "braindead"
        },
        {
            "name": "Electric Dreams",
            "desc": "A sci-fi anthology series with stand-alone episodes based on the works of Philip K. Dick.",
            "seasons": 2,
            "img": "electric_dreams"
        },
        {
            "name": "Battle Creek",
            "desc": "Two detectives with different views on the world team up and using cynicism, guile and deception, they clean up the streets of Battle Creek.",
            "seasons": 2,
            "img": "battle-creek"
        },
        {
            "name": "Patriot",
            "desc": "Follows the complicated life of intelligence officer John Tavner (Michael Dorman), whose latest assignment - to prevent Iran from going nuclear - requires him to forgo all safety nets and assume a perilous non-official cover.",
            "seasons": 3,
            "img": "patriot"
        }
    ],
    "animateds":[
        {
            "name": "Invader Zim",
            "desc": "Zim, an Irken alien, is sent on a secret mission to conquer Earth, not realising that his leaders were just trying to get rid of him. Once there, Zim disguises himself as a human child, but one boy named Dib sees through his disguise.",
            "seasons": 3,
            "img": "invader-zim"
        },
        {
            "name": "Mission Hill",
            "desc": "The misadventures of a group of disparate roomates who live in a hip neighbourhood in a major city.",
            "seasons": 2,
            "img": "mission-hill"
        },
        {
            "name": "Hunter × Hunter",
            "desc": "The adventures of Gon, Killua, Kurapika, and Leorio continues. Starting from the expedition to the Dark Continent.",
            "img": "dark_continent"
        },
        {
            "name": "Johnny the Homicidal Maniac",
            "desc": "Based on the comic book, the animated series tells the story of Johnny “Nny” C. as he explores the psychological and possibly supernatural forces which compel him to commit a string of murders.",
            "seasons": 1,
            "img": "johnny"
        },
        {
            "name": "Spider-Verse: The Series",
            "desc": "Follows Miles Morales as Spider-Man in his adventures through multi-dimensions.",
            "seasons": 1,
            "img": "spider-verse"
        }
    ]
}

function check(){
    var current = new Date().getTime()
    return current - last >= 333
}


function rectProgram(show){

    var img = 'style="background-image:url(\'https://ul.fagnerjb.com/browse/' + show.img + '.jpg\');"',
        seasons = ''

    if(typeof show.seasons == 'number'){
        var plural  = (show.seasons == 1) ? 'season' : 'seasons'
        seasons = '<div class="seasons">' + show.seasons + ' ' + plural + '</div>'
    }

    return '<div class="rect" tabindex="0"><div class="card" ' + img + '><div class="info hide"><div class="play"><i class="fas fa-play"></i></div>' + seasons + '<h3 class="name">' + show.name + '</h3><p class="desc">' + show.desc + '</p></div></div></div>'
}

function goMove(direction, e){

  if('object' == typeof e) {
    e.preventDefault()
    changeInput('keyboard')
  }
  else changeInput(e)

    if(last && !check())
        return

    last = new Date().getTime()

    var onfocus = document.querySelector('.rect:focus'),
        allRect = document.querySelectorAll('.rect'),
        nodes   = Array.prototype.slice.call( allRect ),
        index   = nodes.indexOf( onfocus ),
        new_index = -1
        index   = (index < 0 ) ? 0 : index

    if(!onfocus)
        allRect[0].focus()
    else {

        switch(direction){
            case 'up':
                new_index = ( index-5 < 0 ) ? index : index-5
                allRect[new_index].focus()
                break

            case 'down':
                new_index = ( index+5 > 19 ) ? index : index+5
                allRect[new_index].focus()
                break

            case 'left':
                new_index = ( index-1 < 0 ) ? index : index-1
                allRect[new_index].focus()
                break

            case 'right':
                new_index = ( index+1 > 19 ) ? index : index+1
                allRect[new_index].focus()
                break

            default:
                allRect[0].focus()
        }

    }

}

function popRect(e, elem){

    if(e) e.preventDefault()

    var allRects = document.querySelectorAll('.rect'),
        onfocus  = document.querySelector('.rect:focus')

    if(onfocus == elem){
        goEnter(e)
        return
    }

    for(var i = 0; i < allRects.length; i++){
        allRects[i].blur()
    }

    elem.focus()

}

function goEnter(e){

  if('object' == typeof e) {
    e.preventDefault()
    changeInput('keyboard')
  }
  else changeInput(e)

    var onfocus = document.querySelector('.rect:focus'),
        video   = document.querySelector('.videobox')
    document.title  = onfocus.querySelector('.name').innerText + " - JoBd"

    if(!video){
        video = document.createElement('div')
        video.classList.add('videobox')
        document.body.appendChild(video)
    }

    video.innerHTML = document.querySelector('#video').innerHTML

    document.body.classList.add('full')
}

function goBack(e) {

    if('object' == typeof e) {
      e.preventDefault()
      changeInput('keyboard')
    }
    else changeInput(e)

    var onfocus = document.querySelector('.rect:focus'),
        video   = document.querySelector('.videobox')
    if(video){
        document.title = 'JoBd'
        document.body.classList.remove('full')
        video.innerHTML = '<span>Loading...</span>'
    } else
        return
}

function changeInput(input){

  var gamepad = document.querySelectorAll('.gamepad'),
    keyboard = document.querySelectorAll('.keyboard')

  if('keyboard' == input ){
    for(var i = 0; i < keyboard.length; i++){
      keyboard[i].classList.remove('hide')
    }
    for(var i = 0; i < gamepad.length; i++){
      gamepad[i].classList.add('hide')
    }
  } else {
    for(var i = 0; i < keyboard.length; i++){
      keyboard[i].classList.add('hide')
    }
    for(var i = 0; i < gamepad.length; i++){
      gamepad[i].classList.remove('hide')
    }
  }
}

document.addEventListener('DOMContentLoaded', function(){
    var originals = document.querySelector('.originals'),
        movies    = document.querySelector('.movies'),
        tvshows   = document.querySelector('.tvshows'),
        animateds = document.querySelector('.animated')

    for(var i = 0; i < allShows.originals.length; i++){
        originals.innerHTML += rectProgram(allShows.originals[i])
    }

    for(var i = 0; i < allShows.movies.length; i++){
        movies.innerHTML += rectProgram(allShows.movies[i])
    }

    for(var i = 0; i < allShows.tvshows.length; i++){
        tvshows.innerHTML += rectProgram(allShows.tvshows[i])
    }

    for(var i = 0; i < allShows.animateds.length; i++){
        animateds.innerHTML += rectProgram(allShows.animateds[i])
    }

    var allRects = document.querySelectorAll('.rect')

    document.addEventListener('keydown', function(e){

        switch(e.which){
            case 38:
            case 87:
            case 104:
                goMove('up', e)
                break
            case 37:
            case 65:
            case 100:
                goMove('left', e)
                break
            case 39:
            case 68:
            case 102:
                goMove('right', e)
                break
            case 40:
            case 83:
            case 98:
                goMove('down', e)
                break
            case 32:
            case 13:
            case 101:
                goEnter(e)
                break
            case 8:
            case 27:
                goBack(e)
                break
        }

    })

    for(var i; i < allRects.length; i++){
        allRects[i].addEventListener('touchstart', function(e){
            popRect(e, this)
        })
        allRects[i].addEventListener('click', goEnter)
    }

})
