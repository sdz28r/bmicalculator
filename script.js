/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validateEnglish(){
    var message = "";
    var genderm = document.getElementById("1");
    var genderf = document.getElementById("2");
    var age = document.getElementById('age').value;
    var foot = document.getElementById('foot').value;
    var inch = document.getElementById('inch').value;
    var weight = parseInt(document.getElementById('weight').value);

    if(genderm.checked){
    } else if(genderf.checked){
    } else{
        message = message + "Please select a gender.<br/>";
    }

    if(!isNaN(age) && age>1){
    } else{
        message = message + "Please enter a valid age.<br/>";
    }
    if(foot != ""){
        foot = parseInt(foot);
    } else{
        message = message + "Please enter a value for feet.<br/>";
    }
    if(inch != ""){
        inch = parseInt(inch);
    } else{
        message = message + "Please enter a value for inches.<br/>";
    }
    if(!isNaN(weight) && weight>0){
    } else{
        message = message + "Please enter a valid current weight.<br/>";
    }
    if(message == ""){
        age = parseInt(age);
        var height = foot*12 + inch;
        var calc = (weight * 703)/((height)*(height));
        var bmi = calc.toFixed(1);
        var category;
        if(age > 20){
            if(bmi < 18.5){
                if (bmi > 18){
                    category = "mildly underweight";
                } else{
                    category = "underweight";
                }
                message =  "<h3 style='color: darkorange'>Your Results</h3><p style='text-align: justify'><h3>Based on your body mass index (BMI) of "+bmi+", you \n\
                                are classed as "+category+"\n\.</h3>A healthy BMI is between 18.5 and 24.9, but these numbers can vary for athletes, \n\
                                        pregnant women, and between ethnicities.<br>Your health care provider can help you better \n\
                                            understand the reasons you’re underweight and how they affect your health.<br>"
            } else if(bmi >= 18.5 && bmi < 25){
                category = "Normal Weight";
                message =  "<h3 style='color: darkorange'>Your Results</h3><p style='text-align: justify'><h3>Based on your body mass index (BMI) of "+bmi+", you \n\
                                are classed at a\n\
                                    healthy weight.</h3>A healthy BMI is between 18.5 and 24.9, but these numbers can vary for athletes, \n\
                                        pregnant women, and between ethnicities.<br>A normal BMI is generally associated with lower risk of chronic diseases like \n\
                                            heart disease and diabetes. Your health care provider can help you \n\
                                                better understand your BMI and how it affects your health.<br>"
            } else if(bmi >= 25 && bmi < 30){
                if (bmi == 25){
                    category = "mildly overweight";
                } else{
                    category = "overweight";
                }
                message =  "<h3 style='color: darkorange'>Your Results</h3><p style='text-align: justify'><h3>Based on your body mass index (BMI) of "+bmi+", you \n\
                                are classed as "+category+".</h3>\n\
                                    A healthy BMI is between 18.5 and 24.9, but these numbers can vary for athletes, \n\
                                        pregnant women, and between ethnicities.<br>An overweight BMI is generally associated with higher risk \n\
                                            of chronic diseases like heart disease and diabetes. Your health care provider can help you better \n\
                                                understand the reasons you’re overweight and how they affect your health.<br>"
            } else{
                if (bmi == 30){
                    category = "mildly obese";
                } else{
                    category = "obese";
                }
                message =  "<h3 style='color: darkorange'>Your Results</h3><p style='text-align: justify'><h3>Based on your body mass index (BMI) of "+bmi+", you \n\
                                are classed as "+category+".</h3>\n\
                                    A healthy BMI is between 18.5 and 24.9, but these numbers can vary for athletes, \n\
                                        pregnant women, and between ethnicities.<br>An obese BMI is generally associated with higher risk of chronic diseases like \n\
                                            heart disease and diabetes. Your health care provider can help you better understand \n\
                                                the reasons you’re obese and how they affect your health.<br>"
            }
        } else if(age >= 2 && age <= 20){
            message = "<h3 style='color: darkorange'>Your Results</h3><p style='text-align: justify'><h3>Your body mass index (BMI) is "+bmi+"<br>";
        }
        message = message+"<b>Remember that BMI is interpreted and classified \n\
                    differently for children ages 2 to 20. Health professionals use <a href='growthchart.gif'>growth charts and percentiles</a> based on age and sex.</b></p>"
        document.getElementById('error').classList.remove("alert");
        document.getElementById('error').classList.remove("alert-danger");
        document.getElementById('error').innerHTML = "";
        document.getElementById('p').innerHTML = message;
        document.getElementById('p').style.display = "block";
        document.getElementById('start').style.display = "block";
        document.getElementById('startoveragain').style.display = "block";
        document.getElementById('valeng').style.display = "none";
        document.getElementById('age').readOnly=true;
        document.getElementById('foot').readOnly=true;
        document.getElementById('inch').readOnly=true;
        document.getElementById('weight').readOnly=true;
        document.getElementById("metbtn").disabled = true;
    } else{
        document.getElementById('error').classList.add("alert");
        document.getElementById('error').classList.add("alert-danger");
        document.getElementById('error').innerHTML = message;
        document.getElementById('error').style.display = "block";
    }
}


function validateMetric(){
    var message = "";
    var genderm = document.getElementById("3");
    var genderf = document.getElementById("4");
    var age = document.getElementById('agemetric').value;
    var height = document.getElementById('heightmetric').value;
    var weight = parseInt(document.getElementById('weightmetric').value);

    if(genderm.checked){
    } else if(genderf.checked){
    } else{
        message = message + "Please select a gender.<br/>";
    }

    if(!isNaN(age) && age>1){
    } else{
        message = message + "Please enter a valid age.<br/>";
    }
    if(height != "" && height>0){
        height = parseInt(height);
    } else{
        message = message + "Please enter a value height.<br/>";
    }
    if(!isNaN(weight) && weight>0){
    } else{
        message = message + "Please enter a valid current weight.<br/>";
    }
    if(message == ""){
        var calc = (weight * 100 * 100)/((height)*(height));
        var bmi = calc.toFixed(1);
        var category;
        age = parseInt(age);
        if(age > 20){
            if(bmi < 18.5){
                if (bmi > 18){
                    category = "mildly underweight";
                } else{
                    category = "underweight";
                }
                message =  "<h3 style='color: darkorange'>Your Results</h3><p style='text-align: justify'><h3>Based on your body mass index (BMI) of "+bmi+", you \n\
                                are classed as "+category+"\n\.</h3>A healthy BMI is between 18.5 and 24.9, but these numbers can vary for athletes, \n\
                                        pregnant women, and between ethnicities.<br>Your health care provider can help you better \n\
                                            understand the reasons you’re underweight and how they affect your health.<br>"
            } else if(bmi >= 18.5 && bmi < 25){
                category = "Normal Weight";
                message =  "<h3 style='color: darkorange'>Your Results</h3><p style='text-align: justify'><h3>Based on your body mass index (BMI) of "+bmi+", you \n\
                                are classed at a\n\
                                    healthy weight.</h3>A healthy BMI is between 18.5 and 24.9, but these numbers can vary for athletes, \n\
                                        pregnant women, and between ethnicities.<br>A normal BMI is generally associated with lower risk of chronic diseases like \n\
                                            heart disease and diabetes. Your health care provider can help you \n\
                                                better understand your BMI and how it affects your health.<br>"
            } else if(bmi >= 25 && bmi < 30){
                if (bmi == 25){
                    category = "mildly overweight";
                } else{
                    category = "overweight";
                }
                message =  "<h3 style='color: darkorange'>Your Results</h3><p style='text-align: justify'><h3>Based on your body mass index (BMI) of "+bmi+", you \n\
                                are classed as "+category+".</h3>\n\
                                    A healthy BMI is between 18.5 and 24.9, but these numbers can vary for athletes, \n\
                                        pregnant women, and between ethnicities.<br>An overweight BMI is generally associated with higher risk \n\
                                            of chronic diseases like heart disease and diabetes. Your health care provider can help you better \n\
                                                understand the reasons you’re overweight and how they affect your health.<br>"
            } else{
                if (bmi == 30){
                    category = "mildly obese";
                } else{
                    category = "obese";
                }
                message =  "<h3 style='color: darkorange'>Your Results</h3><p style='text-align: justify'><h3>Based on your body mass index (BMI) of "+bmi+", you \n\
                                are classed as "+category+".</h3>\n\
                                    A healthy BMI is between 18.5 and 24.9, but these numbers can vary for athletes, \n\
                                        pregnant women, and between ethnicities.<br>An obese BMI is generally associated with higher risk of chronic diseases like \n\
                                            heart disease and diabetes. Your health care provider can help you better understand \n\
                                                the reasons you’re obese and how they affect your health.<br>"
            }
        } else if(age >= 2 && age <= 20){
            message = "<h3 style='color: darkorange'>Your Results</h3><p style='text-align: justify'><h3>Your body mass index (BMI) is "+bmi+"<br>";
        }
        message = message+"<b>Remember that BMI is interpreted and classified \n\
                    differently for children ages 2 to 20. Health professionals use <a href='growthchart.gif'>growth charts and percentiles</a> based on age and sex.</b></p>"
        document.getElementById('error').classList.remove("alert");
        document.getElementById('error').classList.remove("alert-danger");
        document.getElementById('error').innerHTML = "";
        document.getElementById('p').innerHTML = message;
        document.getElementById('p').style.display = "block";
        document.getElementById('startover').style.display = "block";
        document.getElementById('startoveragainmetric').style.display = "block";
        document.getElementById('valmet').style.display = "none";
        document.getElementById('agemetric').readOnly=true;
        document.getElementById('heightmetric').readOnly=true;
        document.getElementById('weightmetric').readOnly=true;
        document.getElementById("engbbtn").disabled = true;
    } else{
        document.getElementById('error').classList.add("alert");
        document.getElementById('error').classList.add("alert-danger");
        document.getElementById('error').innerHTML = message;
        document.getElementById('error').style.display = "block";
    }
}


var flag = 1;
function english(){
    flag = 1;
    if(flag == 1){
        document.getElementById('metbtn').style.backgroundColor = "";
        document.getElementById('metbtn').style.color = "";
        document.getElementById('english').style.display = "block";
        document.getElementById('metric').style.display = "none";
        document.getElementById('engbtn').style.backgroundColor = "black";
        document.getElementById('engbtn').style.color = "white";
    }
}
function metric(){
    flag = 0;
    if(flag == 0){
        document.getElementById('engbtn').style.backgroundColor = "";
        document.getElementById('engbtn').style.color = "";
        document.getElementById('english').style.display = "none";
        document.getElementById('metric').style.display = "block";
        document.getElementById('metbtn').style.backgroundColor = "black";
        document.getElementById('metbtn').style.color = "white";
    }
}

function resetEnglish(){
    document.getElementById('p').style.display = "none";
    document.getElementById('start').style.display = "none";
    document.getElementById('startoveragain').style.display = "none";
    document.getElementById('valeng').style.display = "block";
    document.getElementById('age').readOnly=false;
    document.getElementById('foot').readOnly=false;
    document.getElementById('inch').readOnly=false;
    document.getElementById('weight').readOnly=false;
    document.getElementById("metbtn").disabled = false;
}

function resetMetric(){
    document.getElementById('p').style.display = "none";
    document.getElementById('startover').style.display = "none";
    document.getElementById('startoveragainmetric').style.display = "none";
    document.getElementById('valmet').style.display = "block";
    document.getElementById('agemetric').readOnly=false;
    document.getElementById('heightmetric').readOnly=false;
    document.getElementById('weightmetric').readOnly=false;
    document.getElementById("engbtn").disabled = false;
}

function selectOnlyThis(id) {
    for (var i = 1;i <= 2; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function selectOnlyThisMetric(id) {
    for (var i = 3;i <= 4; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function iframeLoaded() {
    var iFrameID = document.getElementById('idIframe');
    if(iFrameID) {
        // here you can make the height, I delete it first, then I make it again
        iFrameID.height = "";
        iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
    }   
}
  