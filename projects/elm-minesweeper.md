---
title: Elm Minesweeper
emoji: 💣
date: 2021-10-06
metaDescription: This is a sample meta description. If one is not present in your page/project's front matter, the default metadata.desciption will be used instead.
summary: Built this Minesweeper game clone using Elm languange while learning the language and functional style of programming
tags:
  - Elm
  - Functional Programming
---

### Background

I have for a long time been fascinated by functional programming. I have never done a full project with functional style, using
only immutable data structures, pure functions etc. So I took this as a challenge to see how I can model this game under functional
constraints. I learned the systax, which is a lot of work but also very rewarding. 

I made use of flex methods to style thing properly. The height and width can be changed and everything stayed centered an in layout.
I used emojis for the icons to keep it basic

### Screenshots

![Screenshot 1](/static/img/projects-screenshots/elm-minesweeper-1.png)
![Screenshot 2](/static/img/projects-screenshots/elm-minesweeper-2.png)
![Screenshot 3](/static/img/projects-screenshots/elm-minesweeper-3.png)

### Code Snippets

    type GameState 
      = NotStarted
      | Playing
      | Finished Bool

    type CoverState 
      = Covered
      | Opened
      | Flagged

    type MineState
      = Mined
      | NotMined

    type alias Cell = 
      { covered: CoverState
      , mine: MineState
      , neighboringBombs: Int 
      }

    type alias Model = 
      { grid: Grid Cell
      , flaggingMode: Bool
      , gameState: GameState
      }

    type ChangeAxis = Width | Height
    type ChangeDirection = Increase | Decrease

    type alias BombPositions = Set (Int, Int)

    type Msg 
      = HandleCellClick { x: Int, y: Int }
      | AddBombs BombPositions
      | ChangeGridSize ChangeAxis ChangeDirection
      | ToggleFlaggingMode
      | StartGame

<br/>

    displayCell: Int -> Int -> Cell -> E.Element Msg
    displayCell x y { covered, mine, neighboringBombs } =
      case (covered, mine) of
        (Covered, _) ->
          E.el 
            (
              cellStyles ++ 
              [
                Element.Events.onClick 
                <| HandleCellClick { x = x, y = y }
              ]
            ) 
            <| E.text "📦"
        
        (Opened, Mined) ->
          E.el 
            cellStyles 
            (E.text "💣")
        
        (Opened, NotMined) -> 
          E.el
            cellStyles
            (
              E.text 
              <| Maybe.withDefault "" 
              <| Array.get neighboringBombs numbersToEmoji
            )
        
        (Flagged, _) ->
          E.el 
            (
              cellStyles ++ 
              [
                Element.Events.onClick 
                <| HandleCellClick { x = x, y = y }
              ]
            )
            (E.text "⛳")

<br/>

    isGameWon: Grid Cell -> Bool
    isGameWon grid =
      let
        foldFinishCombinations: Cell -> Bool -> Bool
        foldFinishCombinations cell goodSoFar =
          let
            wonState = 
              case (cell.mine, cell.covered) of
                (Mined, Covered) -> True
                (Mined, Opened) -> False
                (Mined, Flagged) -> True
                (NotMined, Covered) -> False
                (NotMined, Opened) -> True
                (NotMined, Flagged) -> False
          in
            goodSoFar && wonState
      in
      Grid.foldl foldFinishCombinations True grid