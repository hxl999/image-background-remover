-- 用户表
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar TEXT,
  credits INTEGER DEFAULT 3,
  subscription_plan TEXT,
  subscription_id TEXT,
  subscription_status TEXT DEFAULT 'none',
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- 使用记录表
CREATE TABLE IF NOT EXISTS usage_records (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_email TEXT NOT NULL,
  action TEXT NOT NULL,
  credits INTEGER DEFAULT 0,
  amount REAL DEFAULT 0,
  paypal_order_id TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);
