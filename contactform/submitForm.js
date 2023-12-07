$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwDEhZYzwTTRhw1I0oONByD_ScNdFeQSA1Usq904DN6YB01dZH_V267mabMUbSkmgzg/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            document.getElementById("success-message").innerHTML="Submitted Successfully..!"
            
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})