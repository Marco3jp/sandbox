var db = new Dexie('AppDatabase');

window.onload = function(){
    db.version(1).stores({
        notes: "++id, body, name, time"
    });
}

document.getElementById("button").onclick = function() {
    db.notes.add({
        body: [document.getElementById("body1").value,document.getElementById("body2").value],
        name: document.getElementById("name").value,
        time: new Date().getTime(),
    });
    document.getElementById("name").value = "";
    document.getElementById("body1").value = "";
    document.getElementById("body2").value = "";
    console.log("データを追加！");
};

document.getElementById("close").onclick = function() {
    db.close();
    console.log("くろーずど！");
};

document.getElementById("start").onclick = function() {
    db = Dexie.open('AppDatabase');
    console.log("はじまります！");
};;

document.getElementById("search").onclick = async function(){
    let tmp;
    await db.notes.get(1,function(a){
        tmp=a;
        console.log(a.time);
    });
    console.log(tmp);
}
