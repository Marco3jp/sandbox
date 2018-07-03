class document {
    constructor() {
        this.text=["とりあえずテストの文章です。","どんなテストかというと、例えば今のように読点が入るとウェイトの時間が変わったりですね。あ、今のもテストです","それはそうと、League of LegendsのプロシーンはそろそろMSIが見えてきましたね","とても楽しみです"];
        this.section=0;
        this.position=0;
        this.sectionEndflag=false;
        this.textEndflag=false;
        this.divElement=document.getElementById("display");
    }

    function getNextText(){
        return this.text[section][position];
    }

    function movePosition(){
        if(this.text[this.section].length-1>this.position){
            this.position++;
        }else{
            this.sectionEndflag=true;
        }
    }

    function moveSection(){
        if(this.text.length-1>this.section){
            this.position=0;
            this.sectionEndflag=false;
            this.section++;
        }else{
            this.textEndflag=true;
        }
    }

    function displayCharactorWrapper(){
        if(this.sectionEndflag){
            moveSection();
        }else if(!this.sectionEndflag){
            displaySectionFull();
        }else if(!this.textEndflag){

        }
    }

    function displaySectionFull(){
        window.clearTimeout(this.displayID);
        this.divElement.innerHTML(this.text[section]);
    }

    function displaySection(){
        if(sectionEndflag){
            displayCharactorWrapper();
        }else{
            this.displayID=window.setTimeout(displayCharactor,300,getNextText());
            moveSelector();
        }
    }

    function displayCharactor(char){
        this.divElement.insertAdjacentText("beforeend",char);
        displaySection();
    }
}

var operator = new document;

document.getElementById("start").onclick = function() {
    displaySection();
};

operator.divElement.onclick = function() {
    displayCharactorWrapper();
};
