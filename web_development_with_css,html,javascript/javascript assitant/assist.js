function talk(text) {
    var voice = speechSynthesis.getVoices()
    var speech = new SpeechSynthesisUtterance(text)
    speech.rate = 0.5;
    speech.lang = "en-IN"
    speechSynthesis.speak(speech)
}
function speak() {
    var user = document.querySelector("input").value
    if(user.includes("hi")) {
        talk("hi, Welcome to Our website.")
    }
    else if(user.includes("hello")) {
        talk("hi, I am a, talkative website.")
    }
    else if(user.includes("eat")) {
        talk("I eat your phone, internet")
    }
    else if(user.includes("live")) {
        talk("i live in this website")
    }
    else if(user.includes("what can you do")) {
        talk("i can talk with you")
    }
    else if(user.includes("bye")) {
        talk("Ok bye, have a nice day")
    }
    else if(user.includes("how are you made")) {
        talk("I am made with knowledge, of programming")
    }
    else if(user.includes("you sleep")) {
        talk("No I don't sleep, I am here 24 to 7 to talk with you.")
    }
    else if(user.includes("you intelligent")) {
        talk("I think, I am!")
    }
    else if(user.includes("you play game")) {
        talk("I'm sorry, I can't do that.")
    }
    else if(user.includes("you a robot")) {
        talk("Yes, I am a robot, who lives in your device.")
    }
    else if(user.includes("albert")) {
        talk("Albert Einstein was a german physicist who developed the theory of relativity, His work is also known for its influence, on the philosophy of science.")
    }
    else if(user.includes("elbert")) {
        talk("Albert Einstein was a german physicist who developed the theory of relativity, His work is also known for its influence, on the philosophy of science.")
    }
    else {
        talk("sorry, I cant't answer that now, but i will answer that soon, in my newer version!")
    }
}