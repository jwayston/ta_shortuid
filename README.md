# Short UID plugin for "The Archive"

The plugin generates a shorter note UID and inserts it after the text cursor.

The UID is generated following a "YYMMDDxx" format where
- YY is year
- MM is month
- DD is days
- xx is timestamp as minutes from the beginning of the day
compressed to a custom base40 format

Example: `260210X5`

The character set used in the base40 conversion is
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖÜ" which should ensure that files
named using the UID are sorted correctly. However, this might vary
depending on the locale settings. 
