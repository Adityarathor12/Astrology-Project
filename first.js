const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];

  // size: 31
  const joyfulQuotesAboutYou = [
    "You are the kind of person who makes the world brighter just by being in it.",
    "Your smile has the power to light up even the darkest days.",
    "You have a way of making people feel seen and valued—it's your superpower.",
    "There’s something magical about your energy—it’s truly contagious.",
    "You’re proof that kindness and strength can coexist beautifully.",
    "You have a heart that’s big enough to hold the world’s happiness.",
    "The way you find joy in little things is inspiring to everyone around you.",
    "Your laugh could rival a symphony; it’s pure music to the ears.",
    "You have a gift for making even the simplest moments feel special.",
    "Your presence is like sunshine—it makes everything feel a little warmer.",
    "You are a walking reminder that good people still exist in the world.",
    "Your positivity has a ripple effect; it touches everyone in your orbit.",
    "You have a knack for finding beauty in places others overlook.",
    "You are the kind of person who makes memories unforgettable.",
    "The way you light up when you talk about your passions is inspiring.",
    "Your courage to be yourself is what makes you so radiant.",
    "You carry joy like a treasure, and you share it so effortlessly.",
    "You have a smile that could make a bad day instantly better.",
    "The way you lift others up without even trying is your true strength.",
    "Your laughter feels like home—it’s comforting and familiar to everyone who hears it.",
    "You have a way of turning ordinary days into extraordinary memories.",
    "Your joy is magnetic; people are drawn to your light.",
    "You have a spark that makes the world more vibrant and alive.",
    "You’re the kind of person who turns challenges into opportunities for growth.",
    "Your optimism is refreshing—it’s a reminder to look for the good in life.",
    "You radiate a kind of happiness that’s impossible to ignore.",
    "You’re a reminder that small acts of kindness can have a big impact.",
    "Your unique way of looking at the world is a gift to everyone around you.",
    "You’re not just living life; you’re adding color and vibrancy to it.",
    "Your joy is a reflection of your beautiful, resilient spirit.",
    "You are a celebration of everything wonderful and good in the world."
  ];

  // size: 31
  const victimQuotes = [
    "Sometimes you just need a break from everything and everyone.",
    "Why does life feel so heavy even when nothing is really wrong?",
    "You care deeply, and it feels like nobody notices.",
    "The hardest battles are the ones no one else can see.",
    "You smile, but deep down, you're just trying to get through the day.",
    "Sometimes, you just wish someone would understand without you having to explain.",
    "You do so much for others, but it feels like no one does the same for you.",
    "No matter how far you go, your thoughts always seem to catch up.",
    "You’re tired, not because you did too much, but because you feel too much.",
    "Sometimes, the best way to heal is to let go of what’s hurting you.",
    "It’s not that you don’t want to talk; it’s that you don’t know how to start.",
    "You have so many dreams, but fear keeps holding you back.",
    "Some days, you just want to disappear for a while and be missed.",
    "You keep hoping that things will get better, even when it feels impossible.",
    "You try to stay strong, but even strong people need to cry sometimes.",
    "Sometimes, the hardest thing to do is believe in yourself.",
    "You wonder if anyone else feels as lost as you do.",
    "All you want is peace, but life keeps throwing storms your way.",
    "You give the best advice to others but can’t seem to follow it yourself.",
    "Even when surrounded by people, you can feel completely alone.",
    "You want to move on, but the past keeps pulling you back.",
    "You work hard, but it feels like it’s never enough.",
    "You want someone to notice the effort you put into everything.",
    "You know you’re strong, but you’re tired of being strong all the time.",
    "You don’t want much—just someone to truly see you for who you are.",
    "It’s hard to focus on the future when the past still haunts you.",
    "You’re constantly there for others, but no one checks in on you.",
    "Sometimes, you just want to pause life and catch your breath.",
    "You’re doing your best, even if it doesn’t feel like it’s enough.",
    "You miss the person you used to be before life got so complicated.",
    "No matter how much you grow, there’s a part of you that still feels small."
  ];

  // size: 20
  const predictionQuotes = [
    "Big changes are on the horizon for you—get ready to embrace them with open arms.",
    "The opportunities you’ve been waiting for are closer than you think.",
    "Your hard work is about to pay off in ways you never imagined.",
    "A spark of inspiration will lead you to something extraordinary soon.",
    "You’re about to meet someone who will change your perspective for the better.",
    "This is your season of growth—step into it with confidence.",
    "The answers you’ve been seeking are on their way to you.",
    "Your journey will soon take an exciting and unexpected turn.",
    "You’re about to unlock a hidden talent that will surprise even you.",
    "A moment of clarity will help you make the right decision at the right time.",
    "The stars are aligning in your favor—trust the process and move forward.",
    "Soon, you’ll realize why everything happened the way it did.",
    "A burst of creativity will help you overcome a challenge effortlessly.",
    "Your path is leading you to something more fulfilling than you ever hoped for.",
    "An exciting opportunity will come when you least expect it—stay open to possibilities.",
    "A newfound sense of purpose will guide you toward your dreams.",
    "You’re closer to achieving your goals than you realize—don’t give up now.",
    "Someone will recognize your potential and help you rise to new heights.",
    "Your patience is about to be rewarded with something truly beautiful.",
    "A period of calm and happiness is approaching—enjoy the peace it brings."
  ];

const form= document.querySelector("form");
const button= document.getElementById("button");

form.addEventListener("submit",(event) =>{
event.preventDefault();
const uname= document.getElementById("name").value;
const surname= document.getElementById("surname").value;
const day= Number(document.getElementById("day").value);
const month= Number(document.getElementById("month").value);
const year= Number(document.getElementById("year").value);

let index= (uname.length*surname.length*day)%31; // for joyfull quotes
const joyfulquote= joyfulQuotesAboutYou[index];
index= (surname.length*month*year)%31;
const victimequote= victimQuotes[index];
index= (uname.length*surname.length*day*month*year)%20
const prediction= predictionQuotes[index];

const result= document.getElementById("result");

result.textContent= `Hello,${uname} ${surname} your Zodiac Sign is ${zodiacSigns[month-1]}. ${joyfulquote}.About yourself: ${victimequote}.Our Prediction for you: ${prediction}.`;
})