var setBanner = function(message)
    {
        d3.select("#banner")
            .text(message);
    }

var quizMean=function(penguin)
{
    var getQuizGrades=function(quiz)
        {
            return quiz.grade   
        }
var  quizGrades=penguin.quizes.map(getQuizGrades)
var quizMean=d3.mean(quizGrades)
    {
        return quizMean
    }
}
var homeworkMean=function(penguin)
{
    var getHomeworkGrades=function(homework)
        {
            return homework.grade
        }
var homeworkGrades=penguin.homework.map(getHomeworkGrades)
var homeworkMean=d3.mean(homeworkGrades)
    {
        return homeworkMean
    }
}
var testMean=function(penguin)
{
    var getTestGrades=function(test)
        {
            return test.grade
        }
var testGrades=penguin.test.map(getTestGrades)
var testMean=d3.mean(testGrades)
        {
            return testMean
        }
}
var getFinalGrade=function(penguin)
   {
       var final=penguin.final[0].grade
        return final
   }
var comparePenguins=function(penguin1, penguin2)
          
            {
              if(penguin1.final[0].grade>penguin2.final[0].grade)
                    {
                        return -1;
                    }
                else if(penguin1.final[0].grade==penguin2.final[0].grade)
                    {
                        return 0;
                    }
                else 
                    {
                        return 1;
                    }
            }
var sortFinal=function(penguins)
{   console.log("check")
    d3.select("#finalGrade")
        .on("click",function()
            {
                penguins.sort(comparePenguins)

                console.log("clicked")
                d3.select("table tbody")
                    .selectAll("*")
                    .remove()
                    drawTable(penguins)
    })
}
var drawTable=function(penguins)
    {
        var rows= d3.select("table tbody")
                    .selectAll("tr")
                    .data(penguins)
                    .enter()
                    .append("tr")

                rows.append("td")
                    .append("img")
                    .attr("src",function(pengiun)
                        {
                            return "imgs/"+pengiun.picture;
                        })
                rows.append("td")
                    .text(quizMean);
                rows.append("td")
                    .text(homeworkMean);
                rows.append("td")
                    .text(testMean)
                rows.append("td")
                    .text(getFinalGrade)
    }
var classPromise=d3.json("classData.json");
var successFCN= function(penguins)
    {
        console.log("Students",penguins);
        setBanner("Students");
        drawTable(penguins);
        sortFinal(penguins);
    }
var failureFCN=function(error)
    {
        console.log("Error",error);
        setBanner("Students Not Found");
    }
classPromise.then(successFCN,failureFCN); 