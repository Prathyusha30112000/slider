var num=0;
var imageArr=["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","10.png"]
var headerTag=document.querySelector("header")

function autoSlide()
{
    num++;
    if(num<=imageArr.length-1)
    {
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else
    {
        num=0;
        headerTag.style.backgroundImage=`url(${imageArr[num]})`

    }
  setTimeout(autoSlide,5000)
}
autoSlide()


function sliderRight()
{
    num++;
    if(num<=imageArr.length-1)
    {
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else
    {
        num=0;
        headerTag.style.backgroundImage=`url(${imageArr[num]})`

    }
}
function sliderLeft()
{
    num--;
    if(num<=0)
    {
        num=imageArr.length-1;
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else
    {
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
}