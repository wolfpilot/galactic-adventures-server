-- Create a cron job
SELECT cron.schedule(
    'keep-alive-5',
    '0 0 * * 0,4', -- Every Sunday and Thursday
    $$ SELECT * FROM keep_alive $$ -- Run a random simple query
);
