$('.lined').highlightWithinTextarea({
    highlight: [

        {
            highlight: /\b(date of enactment of the|date of enactment of this Act|date of enactment of this title|date of enactment of this section|date of enactment of this subsection|date of enactment of this paragraph|date of enactment of this sentence|date of enactment of this chapter|date of enactment of this subchapter|date of enactment of this|date of enactment of|date of enactment of|date of the enactment of this Act|date of the enactment of this title|date of the enactment of this section|date of the enactment of this subsection|date of the enactment of this paragraph|date of the enactment of this subparagraph|date of the enactment of this|date of the enactment of the|date of the enactment of|date of the enactment|date of enactment|enactment of this section|enactment of this title|enactment of this Act|enactment|under this title|this title|of this title|titles|title|under this subtitle|of this subtitle|this substitle|under section|Division|under this Act|under this chapter|this chapter|of this chapter|chapter|subchapter|under subchapter|parts|part|subtitles|subtitle|sections|chapters|this part|under this part|subpart|subparts|this subpart|this part|under this part|of this subpart|of subparts|under subparts|under subparts|or parts|or part|and parts|and part|of this Act|this Act|Act)\b/gi,
            className: 'blue'
        },

        {
            highlight: 'under this section',
            className: 'red'
        },

        {
            highlight: 'this section',
            className: 'red'
        },

        {
            highlight: /\b(section)\b/gi,
            className: 'blue'
        },

        {
            highlight: /\[[^\][]*(?:USCS|§|enacted|unclassified)[^\][]*]/gi,
            className: 'green'
        },

        {
            highlight: /\([^()]*(?:\([^()]*\)[^()]*)*(?:USCS|U.S.C.|§|enacted|unclassified)[^()]*(?:\([^()]*\)[^()]*)*\)/gi,
            className: 'green'
        },

        {
            highlight: /\b(and part AA|and part BB|and part CC|and part DD|and part EE|and part FF|and part GG|and part HH|and part II|and part JJ|and part KK|and part LL|and part MM|and part NN|and part OO|and part PP|and part QQ|and part RR|and part SS|and part TT|and part UU|and part VV|and part WW|and part XX|and part YY|and part ZZ|or part AA|or part BB|or part CC|or part DD|or part EE|or part FF|or part GG|or part HH|or part II|or part JJ|or part KK|or part LL|or part MM|or part NN|or part OO|or part PP|or part QQ|or part RR|or part SS|or part TT|or part UU|or part VV|or part WW|or part XX|or part YY|or part ZZ|part AA|part BB|part CC|part DD|part EE|part FF|part GG|part HH|part II|part JJ|part KK|part LL|part MM|part NN|part OO|part PP|part QQ|part RR|part SS|part TT|part UU|part VV|part WW|part XX|part YY|part ZZ|and part A|and part B|and part C|and part D|and part E|and part F|and part G|and part H|and part I|and part J|and part K|and part L|and part M|and part N|and part O|and part P|and part Q|and part R|and part S|and part T|and part U|and part V|and part W|and part X|and part Y|and part Z|or part A|or part B|or part C|or part D|or part E|or part F|or part G|or part H|or part I|or part J|or part K|or part L|or part M|or part N|or part O|or part P|or part Q|or part R|or part S|or part T|or part U|or part V|or part W|or part X|or part Y|or part Z|part A|part B|part C|part D|part E|part F|part G|part H|part I|part J|part K|part L|part M|part N|part O|part P|part Q|part R|part S|part T|part U|part V|part W|part X|part Y|part Z)\b/gi,
            className: 'blue'
        }

    ]
});