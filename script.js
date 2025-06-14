// Tab Switching Logic
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => {
            b.classList.remove('active');
            b.classList.remove('bg-purple-600');
            b.classList.remove('text-white');
            b.classList.add('bg-gray-200');
        });
        tabContents.forEach(content => content.classList.add('hidden'));

        // Add active class to clicked button and show corresponding content
        btn.classList.add('active');
        btn.classList.remove('bg-gray-200');
        btn.classList.add('bg-purple-600');
        btn.classList.add('text-white');
        document.getElementById(btn.dataset.tab).classList.remove('hidden');

        // Hide output box when switching tabs
        document.getElementById('output').classList.add('hidden');
    });
});

// Couple Name Generator
function generateCoupleName() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (!name1 || !name2) {
        alert('Please enter both names!');
        return;
    }

    // Get first half of first name and second half of second name
    const part1 = name1.substring(0, Math.ceil(name1.length / 2));
    const part2 = name2.substring(Math.floor(name2.length / 2));
    const coupleName = part1 + part2;

    showOutput(capitalizeFirstLetter(coupleName));
}

// Instagram Username Generator
function generateInstaName() {
    const input = document.getElementById('instaInput').value.trim();
    const style = document.getElementById('instaStyle').value;

    if (!input) {
        alert('Please enter a name/hobby/mood!');
        return;
    }

    const emojis = {
        cute: ['🌸', '✨', '💫', '💕', '🦋'],
        cool: ['🔥', '⚡', '💫', '🌊', '🎯'],
        professional: ['📈', '💼', '✅', '💡', '🎯']
    };

    const prefixes = {
        cute: ['lovely', 'sweet', 'cute'],
        cool: ['epic', 'awesome', 'ultra'],
        professional: ['official', 'real', 'the']
    };

    const suffixes = {
        cute: ['princess', 'queen', 'star'],
        cool: ['king', 'boss', 'master'],
        professional: ['pro', 'official', 'expert']
    };

    const randomEmoji = emojis[style][Math.floor(Math.random() * emojis[style].length)];
    const randomPrefix = prefixes[style][Math.floor(Math.random() * prefixes[style].length)];
    const randomSuffix = suffixes[style][Math.floor(Math.random() * suffixes[style].length)];

    const username = `${randomEmoji}_${randomPrefix}${input}${randomSuffix}_${randomEmoji}`;
    showOutput(username.toLowerCase());
}

// YouTube Channel Name Generator
function generateYTName() {
    const niche = document.getElementById('ytNiche').value.trim();
    const tone = document.getElementById('ytTone').value;

    if (!niche) {
        alert('Please enter your niche!');
        return;
    }

    const prefixes = {
        funny: ['Crazy', 'Epic', 'Silly'],
        cool: ['Pro', 'Ultimate', 'Elite'],
        professional: ['Expert', 'Master', 'Prime']
    };

    const suffixes = {
        funny: ['Master', 'Guru', 'King'],
        cool: ['Hub', 'Zone', 'Space'],
        professional: ['Academy', 'Institute', 'Pro']
    };

    const randomPrefix = prefixes[tone][Math.floor(Math.random() * prefixes[tone].length)];
    const randomSuffix = suffixes[tone][Math.floor(Math.random() * suffixes[tone].length)];

    const channelName = `${randomPrefix} ${capitalizeFirstLetter(niche)} ${randomSuffix}`;
    showOutput(channelName);
}

// Utility Functions
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showOutput(generatedName) {
    const output = document.getElementById('output');
    const generatedNameElement = document.getElementById('generatedName');
    
    output.classList.remove('hidden');
    generatedNameElement.textContent = generatedName;

    // Smooth scroll to output
    output.scrollIntoView({ behavior: 'smooth' });
}