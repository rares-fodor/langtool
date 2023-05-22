CREATE TABLE IF NOT EXISTS sentences (
    id serial PRIMARY KEY,
    sentence varchar NOT NULL,
    source varchar NOT NULL,
    UNIQUE(sentence, source)
);

INSERT INTO sentences (sentence, source) VALUES
    ('We''re no strangers to love', 'Rick Astley - Never Gonna Give You Up'),
    ('You know the rules and so do I', 'Rick Astley - Never Gonna Give You Up'),
    ('A full commitment''s what I''m thinking of', 'Rick Astley - Never Gonna Give You Up'),
    ('Never gonna give you up', 'Rick Astley - Never Gonna Give You Up'),
    ('Never gonna let you down', 'Rick Astley - Never Gonna Give You Up'),
    ('Who are you talking to right now?', 'Breaking Bad S4E6'),
    ('Who is it you think you see?', 'Breaking Bad S4E6'),
    ('Do you know how much I make a year?', 'Breaking Bad S4E6'),
    ('I mean, even if I told you, you wouldn''t believe it.', 'Breaking Bad S4E6'),
    ('Do you know what would happen if I suddenly decided to stop going into work?', 'Breaking Bad S4E6'),
    ('A business big enough that it could be listed on the NASDAQ goes belly up.', 'Breaking Bad S4E6'),
    ('Disappears!', 'Breaking Bad S4E6'),
    ('It ceases to exist without me.', 'Breaking Bad S4E6'),
    ('No, you clearly don''t know who you''re talking to, so let me clue you in.', 'Breaking Bad S4E6'),
    ('I am not in danger, Skyler.', 'Breaking Bad S4E6'),
    ('I am the danger.', 'Breaking Bad S4E6'),
    ('A guy opens his door and gets shot and you think that of me?', 'Breaking Bad S4E6'),
    ('I am the one who knocks!', 'Breaking Bad S4E6'),
    ('Shields up, weapons online.', 'Starcraft Battlecruiser'),
    ('...Not equipped with shields? ...Well then, buckle up!', 'Starcraft Battlecruiser'),
    ('Battlecruiser operational.', 'Starcraft Battlecruiser'),
    ('All for the Empire.', 'Starcraft Zealot'),
    ('Your thoughts betray you.', 'Starcraft High Templar'),
    ('To be, or not to be: that is the question.', 'William Shakespeare, Hamlet, Act III, Scene I'),
    ('Once more unto the breach, dear friends, once more.', 'William Shakespeare, Henry V, Act III, Scene I');
