// JavaScript Document
console.log("Howdy!");

// Heel veel hulp van Jeffrey :D

// Stap 1: Variabel definieren
var sectionContent = document.querySelector('article section:nth-of-type(2)')
var barbieFront = document.querySelector('article section:nth-of-type(2) img:nth-of-type(1)')
var item1 = document.querySelector('article section:nth-of-type(2) img:nth-of-type(3)')
var item2 = document.querySelector('article section:nth-of-type(2) img:nth-of-type(4)')
var item3 = document.querySelector('article section:nth-of-type(2) img:nth-of-type(2)')
var item4 = document.querySelector('article section:nth-of-type(2) img:nth-of-type(5)')
var barbieBackground = document.querySelector('article section:nth-of-type(3) img')
var barbieLogo = document.querySelector('article section:nth-of-type(1) img:nth-of-type(2)')
var h2 = document.querySelector('article section:nth-of-type(1) h2')
var pInfo = document.querySelector('article section:nth-of-type(1) p:nth-of-type(1)') // keer 5
var pJaartal = document.querySelector('article section:nth-of-type(1) p:nth-of-type(2)')

// Stap 2: EventListener toevoegen (Zodat het luisterd naar een click / hover)
barbieFront.addEventListener('mouseenter', barbieHoverChange)
barbieFront.addEventListener('mouseleave', barbieHoverChangeBack)

var barbieBox = 1; // hiermee kan je bijhouden naar welke box je kijkt :D door hier te plaatsen kan ik hem in andere functies veranderen

// Stap 3: Functie aanmaken
function barbieHoverChange(){ // je gaat met je muis op de barbie staan
    if(barbieBox == 1){
        barbieFront.src = '../images/barbiebruin.png'
        // Classe toevoegen als afbeelding andere grootte heeft. Deze klasse staat dan al in je css met de juiste afmeting voor je afbeelding
    }else if(barbieBox == 2){
        barbieFront.src = '../images/astrobarbietwee.png'// zo kan je het elke keer aanpassen
    }else if(barbieBox == 3){
        barbieFront.src = '../images/spanish.png'// zo kan je het elke keer aanpassen
    }
    // else if(event.type == 'mouseleave'){
    //     barbieFront.classList.toggle('change1')
    // }
}
function barbieHoverChangeBack(){ // je gaat met je muis van de barbie af
    if(barbieBox == 1){
        barbieFront.src = '../images/kenbruin.png'
    }else if(barbieBox == 2){
        barbieFront.src = '../images/astrobarbie.png'
    }else if(barbieBox == 3){
        barbieFront.src = '../images/african.png'
    }
}



// voor veranderen van barbie editie


//stap 1:

var falseItem = document.querySelector('article section:nth-of-type(2) img:nth-of-type(3)')

//stap 2:

// falseItem.addEventListener('click', box2)

//stap 3:

function box2(){
    console.log("ik ben box 2")
    barbieBox = 2;
    changeContent()
}

function box3(){
    console.log("ik ben box 3")
    barbieBox = 3;
    changeContent()
}

function box4(){
    console.log("ik ben box 4")
    barbieBox = 4;
    changeContent()
}

function box5(){
    console.log("ik ben box 5")
    barbieBox = 5;
    changeContent()
}

function box6(){
    console.log("ik ben box 6")
    barbieBox = 5;
    changeContent()
}

function changeContent(){
    switch(barbieBox){
        case 1:
            sectionContent.classList.add('section1')
            falseItem.addEventListener('click', box2)
            console.log('case 1: heeey :D')
            barbieFront.src = '../images/kenbruin.png'
            item1.src = '../images/astrohelm.png'
            item2.src = '../images/strawhat.png'
            item3.src = '../images/towel.png'
            item4.src = '../images/sunnys.png'
            barbieBackground.src = '../images/beach.jpg'
            barbieLogo.src = '../images/1960wit.png'
            // voor andere methode eerste p krijgt display:grid; door middel van een klasse toe te voegen aan die eerste p deze zet je uit en de nieuwe aan.
        break;
        case 2:
            sectionContent.classList.remove('section1')
            sectionContent.classList.add('section2')
            falseItem = document.querySelector('article section:nth-of-type(2) img:nth-of-type(4)') //false item aanpassen
            falseItem.addEventListener('click', box3) // nieuwe eventlistener toe voegen
            console.log('case 2: yess it works :D now its easy')
            barbieFront.src = '../images/astrobarbie.png'
            item1.src = '../images/skates.png'
            item2.src = '../images/passport.png'
            item3.src = '../images/stewardess.png'
            item4.src = '../images/surgeonset.png'
            barbieBackground.src = '../images/space.jpg'
            barbieLogo.src = '../images/seventy-logo.png'
            h2.innerHTML = 'Beroepen'
            pInfo.innerHTML = 'De 70s staan in het teken van Barbie haar carrière. Sinds haar debut heeft Barbie meer dan 200 banen gehad. De oprichter wilde hiermee meisjes inspireren om hun droombaan na te streven. <br> 1973 Barbie, werd chirurg en stewardess en kwam vaak met accessoires die bij haar baan pasten. Ze werd ook astronaut, actrice, computer engineer, designer en kunstschaatser. <br> Verder kreeg barbie een makeover: ze was zon gebruind, kreeg andere haarstijlen, lachte met haar mond open en keek je recht aan.'
            pJaartal.innerHTML = '1970'
        break;
        case 3:
            sectionContent.classList.remove('section2')
            sectionContent.classList.add('section3')
            falseItem = document.querySelector('article section:nth-of-type(2) img:nth-of-type(2)') //false item aanpassen
            falseItem.addEventListener('click', box4) // nieuwe eventlistener toe voegen
            console.log('case 3: yess we are halfway there')
            barbieFront.src = '../images/african.png'
            item1.src = '../images/polynesian.png'
            item2.src = '../images/china.png'
            item3.src = '../images/brush.png'
            item4.src = '../images/french.png'
            barbieBackground.src = '../images/worldmap.jpg'
            barbieLogo.src = '../images/seventy-logo.png'
            h2.innerHTML = 'Nationaliteiten'
            pInfo.innerHTML = 'In de loop der jaren waren er verschillende soorten poppen verkrijgbaar waaronder een paar met een andere nationaliteit, maar ze waren altijd vrienden van Barbie. <br> 1980 een officiële Afro-Amerikaanse Barbie kwam uit, naast een Latina Barbie. In datzelfde jaar werden meer dan 40 verschillende internationale Barbies tot nu toe uitgebracht. <br> 1985 Oscar de la Renta  creëerde een lijn merkkleding voor Barbie. Dit was het begin van vele toekomstige modesamenwerkingen.'
            pJaartal.innerHTML = '1980'
        break;
        case 4:
            sectionContent.classList.remove('section3')
            sectionContent.classList.add('section4')
            falseItem = document.querySelector('article section:nth-of-type(2) img:nth-of-type(2)') //false item aanpassen
            falseItem.addEventListener('click', box5) // nieuwe eventlistener toe voegen
            console.log('case 4: we are at four')
            barbieFront.src = '../images/hairbarbie.png'
            item1.src = '../images/klem.png'
            item2.src = '../images/hairstripes.png'
            item3.src = '../images/beads.png'
            item4.src = '../images/prosthetic.png'
            barbieBackground.src = '../images/nine.jpg'
            barbieLogo.src = '../images/logo90wit.png'
            h2.innerHTML = 'Crazy 90s'
            pInfo.innerHTML = 'In de loop der jaren waren er verschillende soorten poppen verkrijgbaar waaronder een paar met een andere nationaliteit, maar ze waren altijd vrienden van Barbie. <br> 1980 een officiële Afro-Amerikaanse Barbie kwam uit, naast een Latina Barbie. In datzelfde jaar werden meer dan 40 verschillende internationale Barbies tot nu toe uitgebracht. <br> 1985 Oscar de la Renta  creëerde een lijn merkkleding voor Barbie. Dit was het begin van vele toekomstige modesamenwerkingen.'
            pJaartal.innerHTML = '1990'
        break;
        case 5:
            sectionContent.classList.remove('section4')
            sectionContent.classList.add('section5')
            console.log('case 5: we are almost there')
            barbieFront.src = '../images/baldbarbie.png'
            item1.src = '../images/lgbtdress.png'
            item2.src = '../images/nogniks.png'
            item3.src = '../images/wig.png'
            item4.src = '../images/wheelchair.png'
            barbieBackground.src = '../images/rainbow.png'
        break;
        case 6:
            sectionContent.classList.remove('section5')
            sectionContent.classList.add('section6')
            console.log('case 6: The end!')  //klopt nog niet moet nog alle items en barbie voor hebben!
            barbieFront.src = '../images/hairbarbie.png'
            item1.src = '../images/klem.png'
            item2.src = '../images/hairstripes.png'
            item3.src = '../images/beads.png'
            item4.src = '../images/prosthetic.png)'
            barbieBackground.src = '../images/nine.png'
        break;
    }
}



// Bijhouden bij welke box je bent
// Als je veranderd naar volgende box dan verander je de elementen in de box
// vergeet de barbieBox waarde niet te veranderen
// ook moet de positie van de verkeerde veranderen
// Verder moet de hover van de barbie veranderen

addEventListener('load', ()=>{
    changeContent()
})
// ^ dit stukje word uitgevoerd zodra de pagina laad. hierdoor laadt hij de content in uit de switch-case statement.
// Mogelijk gemaakt door Jeffrey :D
