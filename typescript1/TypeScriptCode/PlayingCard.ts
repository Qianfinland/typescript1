
///<reference path='CardSuit.ts'/>
module EasyItSolution4U {
    class PlayingCard
    {
        CardName: string;
        CardValue: string;
        CardImageLocation: string;
        CardSoundLocation: string;
        Suit: CardSuit; // here we need to use reference and also use export
    }
}