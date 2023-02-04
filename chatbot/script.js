var audio = new Audio('assets/sentmessage.mp3');
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>CV Mouad El Hachimi -EMSE.pdf</label></div><a href='assets/Resume.pdf' download='CV_Mouad_ElHachimi-EMSE.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Salut 👋🏻,<br><br>Je suis <span class='bold'><a class='alink'>Mouad EL HACHIMI EL IDRISSI</a>.</span><br><br>Je suis un élève ingénieur en Ingénieur Civil des Mines à <span class='bold'>L'Ecole des Mines de Saint-Étienne 👨🏻‍💻📚</span><br><br>Je suis impatient de connaître les opportunités de carrière potentielles, donc je serais heureux de discuter des offres d'emploi dans le domaine de l'ingénierie.<br><br>Envoyez <span class='bold'>'help'</span> pour en savoir plus sur moi.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Envoyez un mot-clé pour obtenir ce que vous voulez savoir sur moi...<br>e.g<br><span class='bold'>'managerial skills'</span> - pour connaître mes compétences managériales<br><span class='bold'>'electrical skills'</span> - pour connaître mes compétences electriques<br><span class='bold'>'mechanical skills'</span> - pour connaître mes compétences mécaniques<br><span class='bold'>'computer skills'</span> - pour connaître mes compétences informatiques<br><span class='bold'>'optimization and logistics'</span> - pour obtenir des détails sur mon projet : Analyse des flux de matière des entreprises Roannaises<br><span class='bold'>'operational research and logistics'</span> - pour obtenir des détails sur mon projet : Optimisation d'un planning de transport<br><span class='bold'>'optimization and management 1'</span> - pour obtenir des détails sur mon projet : Etude de cas : Aéroport de Vienne<br><span class='bold'>'optimization and management 2'</span> - pour obtenir des détails sur mon projet : Etude de cas : Centre de traitement des déchets<br><span class='bold'>'resume'</span> - pour obtenir mon CV<br><span class='bold'>'clear'</span> - pour clarifier la conversation.</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "managerial skills":
            sendTextMessage("<span class='sk'> - Supply Chain Management. <br> - Lean manufacturing / management. <br> - Gestion de la Production. <br> - Gestion de la maintenance. <br> - Recherche Opérationnelle. <br> - Gestion du stock. <br> - Gestion financière. <br> - Gestion des projets</span>");
            break;
        case "electrical skills":
            sendTextMessage("<span class='sk'> - Machines électriques. <br> - dimensionnent électrique. <br> - Électronique et Électrotechnique. </span>");
            break;
        case "mechanical skills":
            sendTextMessage("<span class='sk'> - Résistance des matériaux. <br> - Mécanique des fluides. <br> - Conception et production mécanique. <br> - Circuit pneumatique et hydraulique. <br> -Transmission de puissance</span>");
            break;
        case "computer skills":
            sendTextMessage("<span class='sk'> - Informatique industriel<br> - La réalisation des applications Windows.<br> - Bureautique (<span class='bold'><br>  Word,<br>  Excel,<br>  PowerPoint.</span>)<br><br> - Programmation (<span class='bold'><br>  VBA,<br>  VB.NET,<br>  C,<br>  C++,<br>  Python.</span>)<br><br> - Logiciels (<span class='bold'><br>  Zelio Soft,<br>  Matlab,<br>  Arena,<br>  Xpress MP,<br>  ADONIS,<br>  Catia V5.</span>)</span>");
            break;
        case "optimization and logistics":
            sendTextMessage("<span class='sk'> Faire un diagnostic de flux (matières premières et déchets) pour cartographier les flux entrants et sortants et mettre en œuvre des filières interentreprises sur le territoire Roannais dans le cadre de la démarche de l'économie circulaire avec l'entreprise «<span class='bold'> Roannais agglomeration. </span>»</span>");
            break;
        case "operational research and logistic":
            sendTextMessage("<span class='sk'> Minimisation du coût d'utilisation des plateformes et moyens de transport d'une entreprise afin de trouver la planification la plus robuste possible face aux aléas sur les logiciels <span class='bold'>Arena</span> et <span class='bold'>Xpress MP</span>.</span>");
            break;
        case "optimization and management 1":
            sendTextMessage("<span class='sk'> Simuler les processus de l'aéroport et se basant sur des données réelles sur le logiciel <span class='bold'>Adonis</span> (Check-in, Baggage check-in, Security, Boarding),<br>Analyser les résultats des différents chemins critique de l'aéroport et enfin proposer des solutions.</span>");
            break;
        case "optimization and management 2":
            sendTextMessage("<span class='sk'> Concevoir un modèle du centre de déchets sur le logiciel <span class='bold'>Arena</span> afin de faire un dimensionnement qui réalise l'objectif annuel de traitement des déchets tout en respectant la contrainte de la pollution en utilisant l'analyse multicritère.</span>");
            break;
        case "clear":
            clearChat();
            break;
        case "new":
            window.location.href = '/#chatbot';
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}