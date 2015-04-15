<?php

foreach (getSundays(2015, 4) as $wednesday) {
    echo $wednesday->format("jS F, Y");
    echo '<br>';
}

function getSundays($y, $m)
{
    return new DatePeriod(
        new DateTime("first sunday of $y-$m"),
        DateInterval::createFromDateString('next sunday'),
        new DateTime("last day of $y-$m")
    );
}

// Date format info: http://php.net/manual/en/function.date.php