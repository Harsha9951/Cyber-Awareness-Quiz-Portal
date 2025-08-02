import { User, Quiz, Badge, LeaderboardEntry } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Chen',
  email: 'alex.chen@example.com',
  role: 'user',
  avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
  xp: 2450,
  level: 8,
  badges: [],
  streak: 12,
};

export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Phishing Attack Fundamentals',
    description: 'Learn to identify and prevent phishing attacks',
    category: 'Email Security',
    timeLimit: 300,
    difficulty: 'easy',
    questions: [
      {
        id: '1',
        question: 'What is the most common type of cyber attack?',
        options: ['Phishing', 'Malware', 'DDoS', 'SQL Injection'],
        correctAnswer: 0,
        explanation: 'Phishing attacks are the most common form of cyber attack, accounting for over 90% of data breaches.',
        difficulty: 'easy',
      },
      {
        id: '2',
        question: 'Which of these is a red flag in an email?',
        options: ['Urgent language', 'Suspicious links', 'Unexpected attachments', 'All of the above'],
        correctAnswer: 3,
        explanation: 'All of these are common indicators of phishing emails that should raise suspicion.',
        difficulty: 'medium',
      },
      {
        id: '3',
        question: 'What is domain spoofing in phishing attacks?',
        options: [
          'Creating fake websites that look legitimate',
          'Stealing domain names',
          'Blocking legitimate domains',
          'Redirecting traffic to malicious sites'
        ],
        correctAnswer: 0,
        explanation: 'Domain spoofing involves creating fake websites that mimic legitimate ones to steal credentials.',
        difficulty: 'medium',
      },
      {
        id: '4',
        question: 'How should you verify a suspicious link before clicking?',
        options: [
          'Click it to see where it goes',
          'Hover over it to see the actual URL',
          'Trust it if it looks official',
          'Ask friends on social media'
        ],
        correctAnswer: 1,
        explanation: 'Always hover over links to see the actual destination URL before clicking.',
        difficulty: 'easy',
      },
      {
        id: '5',
        question: 'Why do phishing attacks often create urgency?',
        options: [
          'To help users faster',
          'To bypass critical thinking',
          'To show importance',
          'To save time'
        ],
        correctAnswer: 1,
        explanation: 'Urgency is used to pressure victims into acting quickly without thinking critically.',
        difficulty: 'medium',
      },
    ],
  },
  {
    id: '2',
    title: 'Password Security Mastery',
    description: 'Master the art of creating and managing secure passwords',
    category: 'Authentication',
    timeLimit: 240,
    difficulty: 'medium',
    questions: [
      {
        id: '3',
        question: 'What makes a password strong?',
        options: ['Length only', 'Complexity only', 'Both length and complexity', 'Using personal information'],
        correctAnswer: 2,
        explanation: 'Strong passwords combine both length (12+ characters) and complexity (mixed case, numbers, symbols).',
        difficulty: 'easy',
      },
      {
        id: '6',
        question: 'Why shouldn\'t you reuse passwords across multiple accounts?',
        options: [
          'It\'s too confusing',
          'If one account is breached, all accounts are at risk',
          'It\'s against the law',
          'Passwords expire faster'
        ],
        correctAnswer: 1,
        explanation: 'Password reuse means that if one account is compromised, attackers can access all your other accounts.',
        difficulty: 'easy',
      },
      {
        id: '7',
        question: 'What is 2FA and why is it important?',
        options: [
          'Two-Factor Authentication - adds an extra security layer',
          'Two-File Authentication - protects files',
          'Two-Firewall Authentication - network security',
          'Two-Factor Analysis - password checking'
        ],
        correctAnswer: 0,
        explanation: '2FA requires a second form of verification, making accounts much more secure even if passwords are compromised.',
        difficulty: 'medium',
      },
      {
        id: '8',
        question: 'What\'s the difference between a passphrase and a password?',
        options: [
          'No difference',
          'Passphrases are longer and use multiple words',
          'Passphrases are shorter',
          'Passphrases only use numbers'
        ],
        correctAnswer: 1,
        explanation: 'Passphrases are longer combinations of words that are easier to remember but harder to crack.',
        difficulty: 'medium',
      },
    ],
  },
  {
    id: '3',
    title: 'Social Engineering Tactics',
    description: 'Understand and defend against social engineering attacks',
    category: 'Social Engineering',
    timeLimit: 360,
    difficulty: 'medium',
    questions: [
      {
        id: '9',
        question: 'What is "pretexting" in social engineering?',
        options: [
          'Sending text messages',
          'Creating a fabricated scenario to engage victims',
          'Writing fake reviews',
          'Posting on social media'
        ],
        correctAnswer: 1,
        explanation: 'Pretexting involves creating a false scenario to build trust and extract information from victims.',
        difficulty: 'medium',
      },
      {
        id: '10',
        question: 'How does shoulder surfing work as an attack method?',
        options: [
          'Hacking into shoulder implants',
          'Watching someone enter passwords or PINs',
          'Attacking from behind',
          'Using shoulder-mounted cameras'
        ],
        correctAnswer: 1,
        explanation: 'Shoulder surfing involves observing someone enter sensitive information like passwords or PINs.',
        difficulty: 'easy',
      },
      {
        id: '11',
        question: 'What makes tailgating a security threat?',
        options: [
          'Following too closely while driving',
          'Unauthorized access by following authorized personnel',
          'Copying someone\'s style',
          'Walking behind someone'
        ],
        correctAnswer: 1,
        explanation: 'Tailgating allows unauthorized individuals to gain physical access by following authorized personnel.',
        difficulty: 'medium',
      },
      {
        id: '12',
        question: 'Who is Kevin Mitnick and why is he famous in cybersecurity?',
        options: [
          'A famous hacker turned security consultant',
          'Creator of the internet',
          'First computer programmer',
          'Inventor of passwords'
        ],
        correctAnswer: 0,
        explanation: 'Kevin Mitnick was one of the most famous hackers who later became a respected security consultant and author.',
        difficulty: 'hard',
      },
      {
        id: '13',
        question: 'What\'s the best defense against social engineering?',
        options: [
          'Strong passwords',
          'Antivirus software',
          'Education and awareness training',
          'Firewalls'
        ],
        correctAnswer: 2,
        explanation: 'Education and awareness are the most effective defenses against social engineering attacks.',
        difficulty: 'medium',
      },
    ],
  },
  {
    id: '4',
    title: 'Wi-Fi & Device Security',
    description: 'Secure your devices and wireless connections',
    category: 'Network Security',
    timeLimit: 300,
    difficulty: 'medium',
    questions: [
      {
        id: '14',
        question: 'What is WPA3 and why is it important?',
        options: [
          'A new Wi-Fi standard with enhanced security',
          'A password manager',
          'A type of malware',
          'A web browser'
        ],
        correctAnswer: 0,
        explanation: 'WPA3 is the latest Wi-Fi security protocol offering stronger encryption and protection.',
        difficulty: 'medium',
      },
      {
        id: '15',
        question: 'Why is using public Wi-Fi risky?',
        options: [
          'It\'s slower',
          'Data can be intercepted by attackers',
          'It costs money',
          'It drains battery faster'
        ],
        correctAnswer: 1,
        explanation: 'Public Wi-Fi networks are often unsecured, allowing attackers to intercept data transmissions.',
        difficulty: 'easy',
      },
      {
        id: '16',
        question: 'What does a VPN do for your security?',
        options: [
          'Speeds up internet',
          'Encrypts your internet traffic',
          'Blocks all websites',
          'Increases bandwidth'
        ],
        correctAnswer: 1,
        explanation: 'A VPN encrypts your internet traffic, protecting your data from interception.',
        difficulty: 'easy',
      },
      {
        id: '17',
        question: 'Why should Bluetooth be turned off when not in use?',
        options: [
          'To save battery only',
          'To prevent unauthorized connections and attacks',
          'It\'s required by law',
          'To improve Wi-Fi speed'
        ],
        correctAnswer: 1,
        explanation: 'Leaving Bluetooth on creates potential attack vectors for unauthorized access and data theft.',
        difficulty: 'medium',
      },
    ],
  },
  {
    id: '5',
    title: 'Cyber Laws & Ethics',
    description: 'Understanding legal and ethical aspects of cybersecurity',
    category: 'Legal & Ethics',
    timeLimit: 420,
    difficulty: 'hard',
    questions: [
      {
        id: '18',
        question: 'What is the IT Act 2000 in India?',
        options: [
          'A technology company',
          'Legislation governing cyber crimes and electronic commerce',
          'A software program',
          'An internet service provider'
        ],
        correctAnswer: 1,
        explanation: 'The IT Act 2000 is India\'s primary legislation dealing with cybercrime and electronic commerce.',
        difficulty: 'hard',
      },
      {
        id: '19',
        question: 'What is GDPR and why is it significant?',
        options: [
          'A programming language',
          'General Data Protection Regulation - EU privacy law',
          'A type of malware',
          'A security tool'
        ],
        correctAnswer: 1,
        explanation: 'GDPR is a comprehensive privacy regulation that protects EU citizens\' personal data.',
        difficulty: 'hard',
      },
      {
        id: '20',
        question: 'Is ethical hacking legal?',
        options: [
          'Never legal',
          'Always legal',
          'Legal with proper authorization and scope',
          'Only on weekends'
        ],
        correctAnswer: 2,
        explanation: 'Ethical hacking is legal when performed with proper authorization and within defined scope.',
        difficulty: 'medium',
      },
      {
        id: '21',
        question: 'What is a zero-day vulnerability?',
        options: [
          'A vulnerability that takes zero days to fix',
          'A security flaw unknown to vendors and without patches',
          'A vulnerability that costs zero dollars',
          'A bug that appears on day zero'
        ],
        correctAnswer: 1,
        explanation: 'Zero-day vulnerabilities are security flaws that are unknown to software vendors and have no available patches.',
        difficulty: 'hard',
      },
    ],
  },
  {
    id: '6',
    title: 'Secure Coding Practices',
    description: 'Essential security practices for developers',
    category: 'Development Security',
    timeLimit: 360,
    difficulty: 'hard',
    questions: [
      {
        id: '22',
        question: 'What is input validation and why is it crucial?',
        options: [
          'Checking if inputs are spelled correctly',
          'Verifying and sanitizing user inputs to prevent attacks',
          'Making sure inputs are in uppercase',
          'Counting the number of inputs'
        ],
        correctAnswer: 1,
        explanation: 'Input validation prevents malicious data from being processed, stopping many types of attacks.',
        difficulty: 'medium',
      },
      {
        id: '23',
        question: 'Why is SQL injection dangerous?',
        options: [
          'It slows down databases',
          'It can allow unauthorized database access and manipulation',
          'It uses too much memory',
          'It creates duplicate records'
        ],
        correctAnswer: 1,
        explanation: 'SQL injection can allow attackers to access, modify, or delete database information.',
        difficulty: 'medium',
      },
      {
        id: '24',
        question: 'What does XSS stand for and what does it do?',
        options: [
          'Extra Security System - adds protection',
          'Cross-Site Scripting - injects malicious scripts',
          'eXtended SQL Server - database enhancement',
          'eXtreme Security Standard - security protocol'
        ],
        correctAnswer: 1,
        explanation: 'Cross-Site Scripting (XSS) allows attackers to inject malicious scripts into web pages.',
        difficulty: 'hard',
      },
    ],
  },
  {
    id: '7',
    title: 'Network Security Fundamentals',
    description: 'Understanding network security concepts and tools',
    category: 'Network Security',
    timeLimit: 300,
    difficulty: 'medium',
    questions: [
      {
        id: '25',
        question: 'What does a firewall do?',
        options: [
          'Prevents fires in computers',
          'Controls network traffic based on security rules',
          'Speeds up internet connection',
          'Stores passwords'
        ],
        correctAnswer: 1,
        explanation: 'Firewalls monitor and control incoming and outgoing network traffic based on security rules.',
        difficulty: 'easy',
      },
      {
        id: '26',
        question: 'What is the default port for HTTPS?',
        options: ['80', '443', '22', '21'],
        correctAnswer: 1,
        explanation: 'HTTPS uses port 443 by default for secure web communications.',
        difficulty: 'medium',
      },
      {
        id: '27',
        question: 'What is ARP spoofing?',
        options: [
          'A music streaming attack',
          'Sending fake ARP messages to link attacker\'s MAC to victim\'s IP',
          'A type of email spam',
          'A password cracking method'
        ],
        correctAnswer: 1,
        explanation: 'ARP spoofing involves sending fake ARP messages to associate the attacker\'s MAC address with the victim\'s IP.',
        difficulty: 'hard',
      },
    ],
  },
  {
    id: '8',
    title: 'Malware & Cyber Threats',
    description: 'Identify and understand various types of malware',
    category: 'Threat Intelligence',
    timeLimit: 300,
    difficulty: 'medium',
    questions: [
      {
        id: '28',
        question: 'What is a Trojan horse in cybersecurity?',
        options: [
          'A large wooden horse',
          'Malware disguised as legitimate software',
          'A type of firewall',
          'A secure communication method'
        ],
        correctAnswer: 1,
        explanation: 'A Trojan horse is malicious software that appears to be legitimate but contains hidden harmful functionality.',
        difficulty: 'easy',
      },
      {
        id: '29',
        question: 'What\'s the difference between a worm and a virus?',
        options: [
          'No difference',
          'Worms self-replicate without host files, viruses need host files',
          'Worms are slower',
          'Viruses are more dangerous'
        ],
        correctAnswer: 1,
        explanation: 'Worms can replicate independently, while viruses need to attach to host files to spread.',
        difficulty: 'medium',
      },
      {
        id: '30',
        question: 'What is ransomware?',
        options: [
          'Software that demands payment to unlock encrypted files',
          'Free security software',
          'A type of antivirus',
          'A backup solution'
        ],
        correctAnswer: 0,
        explanation: 'Ransomware encrypts victim\'s files and demands payment for the decryption key.',
        difficulty: 'easy',
      },
    ],
  },
];

export const mockBadges: Badge[] = [
  {
    id: '1',
    name: 'Phishing Fighter',
    description: 'Complete 5 phishing-related quizzes',
    icon: 'shield-check',
    condition: 'Complete 5 phishing quizzes',
  },
  {
    id: '2',
    name: 'Password Guardian',
    description: 'Master password security fundamentals',
    icon: 'lock',
    condition: 'Score 90%+ on password quiz',
  },
  {
    id: '3',
    name: 'Streak Master',
    description: 'Maintain a 7-day learning streak',
    icon: 'flame',
    condition: 'Complete quizzes for 7 consecutive days',
  },
  {
    id: '4',
    name: 'Cyber Guru',
    description: 'Reach level 10 in your cyber journey',
    icon: 'crown',
    condition: 'Reach level 10',
  },
  {
    id: '5',
    name: 'Social Engineer Detector',
    description: 'Excel at identifying social engineering tactics',
    icon: 'eye',
    condition: 'Score 95%+ on social engineering quiz',
  },
  {
    id: '6',
    name: 'Network Defender',
    description: 'Master network security concepts',
    icon: 'wifi',
    condition: 'Complete all network security quizzes',
  },
  {
    id: '7',
    name: 'Code Warrior',
    description: 'Understand secure coding practices',
    icon: 'code',
    condition: 'Score 90%+ on secure coding quiz',
  },
  {
    id: '8',
    name: 'Threat Hunter',
    description: 'Identify various malware types',
    icon: 'search',
    condition: 'Complete malware identification challenges',
  },
];

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    userId: '1',
    userName: 'Alex Chen',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    totalScore: 2450,
    totalQuizzes: 25,
    averageScore: 92,
    badges: 12,
    level: 8,
  },
  {
    userId: '2',
    userName: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400',
    totalScore: 2380,
    totalQuizzes: 28,
    averageScore: 89,
    badges: 10,
    level: 7,
  },
  {
    userId: '3',
    userName: 'Mike Rodriguez',
    avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400',
    totalScore: 2200,
    totalQuizzes: 22,
    averageScore: 94,
    badges: 8,
    level: 7,
  },
];