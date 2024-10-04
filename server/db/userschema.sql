-- Create Users Table
CREATE SCHEMA users (
    id SERIAL PRIMARY KEY,                   -- Auto-incrementing user ID
    username VARCHAR(255) UNIQUE NOT NULL,   -- Username must be unique and not null
    password VARCHAR(255) NOT NULL,          -- Password is required
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Timestamp, default to current time
);

-- Create Journal Entry Table
CREATE SCHEMA journalEntry (
    id SERIAL PRIMARY KEY,                   -- Auto-incrementing entry ID
    title VARCHAR(255),                      -- Optional title for the journal entry
    user_id INTEGER NOT NULL,                -- Foreign key referencing users table
    color VARCHAR(50) DEFAULT 'white',       -- Color choice, default to 'white'
    mood VARCHAR(100),                       -- User mood, like happy, sad, etc.
    anxiety INTEGER DEFAULT 0,               -- Anxiety level, default to 0
    sleep INTEGER DEFAULT 0,                 -- Sleep level or hours, default to 0
    message TEXT NOT NULL,                   -- Content of the journal entry
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Default timestamp
    CONSTRAINT fk_user
        FOREIGN KEY (user_id) 
        REFERENCES users(id)                 -- Foreign key constraint for users
        ON DELETE CASCADE                    -- Cascade deletion if user is deleted
);

