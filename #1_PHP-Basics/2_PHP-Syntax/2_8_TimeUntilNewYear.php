<?php
date_default_timezone_set('Europe/Sofia');
function getTimeIntervalUntilNewYear($inputDateStr = null) {
    $currentTime = getdate();
    $currentYear = $currentTime['year'];
    $currentTime = $currentTime[0];

    if ($inputDateStr !== null) {
        $inputDate = preg_split("/\D+/", $inputDateStr);
        if (count($inputDate) == 6) {
            $currentTime = mktime($inputDate[3], $inputDate[4], $inputDate[5],
                $inputDate[1], $inputDate[0], $inputDate[2]);
            $currentYear = (int)$inputDate[2];
        }
    }

    $newYearTime = mktime(23, 59, 59, 12, 31, $currentYear);
    $totalSeconds = $newYearTime - $currentTime;
    $totalMinutes = (int)($totalSeconds / 60);
    $totalHours = (int)($totalSeconds / 3600);
    $days = (int)($totalSeconds / 86400);
    $seconds = $totalSeconds % 86400;
    $hours = (int)($seconds / 3600);
    $seconds = $seconds % 3600;
    $minutes = (int)($seconds / 60);
    $seconds = $seconds % 60;

    echo "<p>Hours until new year : $totalHours</p>\n<p>Minutes until new year : " .
        number_format($totalMinutes, 0, ' ', ' ') . "</p>\n" .
        "<p>Seconds until new year : " . number_format($totalSeconds, 0, ' ', ' ') . "</p>\n" .
        "<p>Days:Hours:Minutes:Seconds $days:$hours:$minutes:$seconds</p>\n";
}

getTimeIntervalUntilNewYear('12-08-2014 11:08:47');
getTimeIntervalUntilNewYear('12-08-2014 13:07:09');
getTimeIntervalUntilNewYear('12-02-2015 20:30:10');
getTimeIntervalUntilNewYear();