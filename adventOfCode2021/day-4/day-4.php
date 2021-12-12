<?php

$myFile= "input.txt";
$data=file($myFile);

//--- Day 4: Giant Squid ---
//You're already almost 1.5km (almost a mile) below the surface of the ocean, already so deep that you can't see any sunlight. What you can see, however, is a giant squid that has attached itself to the outside of your submarine.
//
//Maybe it wants to play bingo?
//
//Bingo is played on a set of boards each consisting of a 5x5 grid of numbers. Numbers are chosen at random, and the chosen number is marked on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board wins. (Diagonals don't count.)
//
//The submarine has a bingo subsystem to help passengers (currently, you and the giant squid) pass the time. It automatically generates a random order in which to draw numbers and a random set of boards (your puzzle input). For example:
//
//7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1
//
//22 13 17 11  0
// 8  2 23  4 24
//21  9 14 16  7
// 6 10  3 18  5
// 1 12 20 15 19
//
// 3 15  0  2 22
// 9 18 13 17  5
//19  8  7 25 23
//20 11 10 24  4
//14 21 16 12  6
//
//14 21 17 24  4
//10 16 15  9 19
//18  8 23 26 20
//22 11 13  6  5
// 2  0 12  3  7
//After the first five numbers are drawn (7, 4, 9, 5, and 11), there are no winners, but the boards are marked as follows (shown here adjacent to each other to save space):
//
//22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
// 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
//21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
// 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
// 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
//After the next six numbers are drawn (17, 23, 2, 0, 14, and 21), there are still no winners:
//
//22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
// 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
//21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
// 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
// 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
//Finally, 24 is drawn:
//
//22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
// 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
//21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
// 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
// 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
//At this point, the third board wins because it has at least one complete row or column of marked numbers (in this case, the entire top row is marked: 14 21 17 24 4).
//
//The score of the winning board can now be calculated. Start by finding the sum of all unmarked numbers on that board; in this case, the sum is 188. Then, multiply that sum by the number that was just called when the board won, 24, to get the final score, 188 * 24 = 4512.
//
//To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?

function FirstToBeatGiantSquid($data) : int {
    $first=true;
    $calledNumbers=array();
    $row=1;
    $bingoBoard = (object) array('RowOne'=>array(),
                                 'RowTwo'=>array(),
                                 'RowThree'=>array(),
                                 'RowFour'=>array(),
                                 'RowFive'=>array(),
                                 'ColumnOne'=>array(),
                                 'ColumnTwo'=>array(),
                                 'ColumnThree'=>array(),
                                 'ColumnFour'=>array(),
                                 'ColumnFive'=>array());
    $bingoBoards = array();
    foreach ($data as $item){
        if($first){
            $calledNumbers = explode(',', $item);
            $first=false;
        }
        $item = trim($item);
        if(empty($item)){
            continue;
        }

        switch ($row) {
            case 1:
                $bingoBoard['RowOne']=explode(' ', $item);
                $row=2;
                break;
            case 2:
                $bingoBoard['RowTwo']=explode(' ', $item);
                $row=3;
                break;
            case 3:
                $bingoBoard['RowThree']=explode(' ', $item);
                $row=4;
                break;
            case 4:
                $bingoBoard['RowFour']=explode(' ', $item);
                $row=5;
                break;
            case 5:
                $bingoBoard['RowFive']=explode(' ', $item);
                $row=1;
                break;
            default:
                break;
        }
        $itemInArray=explode(' ', $item);
        array_push($bingoBoard['ColumnOne'], $itemInArray[0]);
        array_push($bingoBoard['ColumnTwo'], $itemInArray[1]);
        array_push($bingoBoard['ColumnThree'], $itemInArray[2]);
        array_push($bingoBoard['ColumnFour'], $itemInArray[3]);
        array_push($bingoBoard['ColumnFive'], $itemInArray[4]);

        if(!empty($bingoBoard['ColumnFive'])){
            array_push($bingoBoards, $bingoBoard);
            $bingoBoard = (object) array('RowOne'=>array(),
                'RowTwo'=>array(),
                'RowThree'=>array(),
                'RowFour'=>array(),
                'RowFive'=>array(),
                'ColumnOne'=>array(),
                'ColumnTwo'=>array(),
                'ColumnThree'=>array(),
                'ColumnFour'=>array(),
                'ColumnFive'=>array());
        }
    }
    foreach($calledNumbers as $calledNumber){
        foreach ($bingoBoards as $bingoBoard){

        }
    }
}
FirstToBeatGiantSquid($data);
//echo 'First Solution: '.FirstToBeatGiantSquid($data)."\n";