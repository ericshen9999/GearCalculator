function store(){
    var set = document.getElementById('dropset').innerHTML;
    var type = document.getElementById('droptype').innerHTML;
    var grade = document.getElementById('dropgrade').innerHTML;
    var level = document.getElementById('level').value;
    var mstat = document.getElementById('dropdiv').innerHTML;
    var mstatnum = document.getElementById('mstat').value;
    var sstat1 = document.getElementById('dropdiv1').innerHTML;
    var sstat1num = document.getElementById('sstat1').value;
    var sstat2 = document.getElementById('dropdiv2').innerHTML;
    var sstat2num = document.getElementById('sstat2').value;
    var sstat3 = document.getElementById('dropdiv3').innerHTML;
    var sstat3num = document.getElementById('sstat3').value;
    var sstat4 = document.getElementById('dropdiv4').innerHTML;
    var sstat4num = document.getElementById('sstat4').value;

    var output = "Id: " + "???" + "\n" +
        "Type: " + type + "\n" +
        "Set: " + set + "\n" +
        "Grade: " + grade + "\n" +
        "Ilvl: " + level + "\n" +
        "Main: " + mstat + " " + mstatnum + "\n" +
        "Sub: " + sstat1 + " " + sstat1num + ", " + "\n" +
            sstat2 + " " + sstat2num + ", "+ "\n" +
            sstat3 + " " + sstat3num + ", " + "\n" +
            sstat4 + " " + sstat4num + ", " + "\n";
    console.log(output)
}