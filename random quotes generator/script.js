function generate(){
    const quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing.",
        "Your time is limited, don't waste it living someone else's life.",
        "If life were predictable it would cease to be life, and be without flavor.",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "Life is what happens when you're busy making other plans.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Only the paranoid survive.",
        "It's hard to beat a person who never gives up.",
        "I find that the harder I work, the more luck I seem to have.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "The only way to do great work is to love what you do.",
        "Believe you can and you're halfway there.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Don't watch the clock; do what it does. Keep going.",
        "Everything you can imagine is real.",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks."
      ];
    
      const authors = [
        "Nelson Mandela",
        "Walt Disney",
        "Steve Jobs",
        "Eleanor Roosevelt",
        "James Cameron",
        "John Lennon",
        "Chinese Proverb",
        "Andy Grove",
        "Babe Ruth",
        "Thomas Jefferson",
        "Winston Churchill",
        "Steve Jobs",
        "Theodore Roosevelt",
        "Eleanor Roosevelt",
        "Sam Levenson",
        "Pablo Picasso",
        "Buddha",
        "Winston Churchill",
        "Franklin D. Roosevelt",
        "Mark Zuckerberg"
      ];

    let rnd = Math.floor(Math.random()*quotes.length);
    console.log("Number is: "+(rnd+1))

    document.getElementById("quote").innerHTML = quotes[rnd];
    document.getElementById("author").innerHTML = authors[rnd]
}