var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                               o                ",
   "                                               o                                ",
   "                                                               xx               ",
   "                                               xx  o       oo   |               ",
   "                                               v   xx      xx      xx           ",
   "                                    o o   x                                     ",
   "                                      j               xx     =       xx         ",
   "                                      x                                         ",
   "                                                                                ",
   "                                   xxx    o o                                   ",
   "                        o       s                                               ",
   "             n  n               x        xxxxx                             o    ",
   "             x  x       o                                                       ",
   "     @j      x  x                     j                                         ",
   "  xxxxxxxx!xxx!!xx!!xxx!!xxxxxx!!!xxxxxxxxx   xxxxxxxx!!!!!xxxxxxx!!!xxx  xx  x ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  x!x           ",
   "                                                 x   x x  xx  x  !x!x!          ",
   "                                    o o      x                  x!!!xx          ",
   "                                             x   xxx         x!x   xx!xx       x",
   "                                   xx    x                      xvx    x !      ",
   "     @j                              x                                       xx ",
   "  xxxxx     n    n                           o o                                ",
   "  xxxx      x    x          o                                                   ",
   "  xxx    x      x x                         x xxxx                             o",
   "  xx      x    xxxxx       o        x x   x x                                 x ",
   "  x     !!! x  x  !!!! s   x  j       !!!    x         x                 xxxxxx ",
   "  xxxxxxxxxxxx  xxxxxxxxxx!!!xx   xxxxxxxx!!!!xxxxxxx!! x  x xxxxx!!!xxxxxxxxx  ",
   "                              x   x                  x     x                    ",
   "                             !!!!!!!                 !!!!!!!                    ",
   "                             !!!!!!!                 !!!!!!!                    ",
   "                             !!!!!!!                 !!!!!!!                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                       x     x     x     x                        ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                      ooo    oo    oo    o                        ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                                                                  ",
   "                                                                    x!!!!!x!!!!!x!!!!!x!!!!!x                     ",
   "                                                                                                                  ",
   "                 n                                          o      x                                              ",
   "                 x            o                                  x                                                ",
   "                x x                                           o !                                                 ",
   "               x   x      xx        j    x               j     !                                                  ",
   "              x     x  xo   =   x   x                     x   x                              x                    ",
   "     j       x       x  x   =    xo                      x                                                        ",
   "     @                            x                     x                                                         ",
   "     x                               x                xx                            xxx                           ",
   "                              x   o x            s  xx                       o                                    ",
   "!x!x! x!!x!!!           !    !x    x     |        xx  =  x!!!!!                                                   ",
   "x!x!x !xx!x!!            ! !!x =               xxx     xxx!!xxxxxxxx       xxxxx                                  ",
   "!x!x! xxx!!x!             !!!x|          o  xxx        xx!!!xx !                    xx    xx                      ",
   "x!x!x !x!x!x!            !  !x   o       xxx          xx!!!xx  !                       xxx                        ",
   "xx!!x x!x!x!!           !    !x      !xxx   xxxxxxxx!!!!!!xx   !                                                  ",
   "xx!x! !!x!x!!            !!!! xxx  xxx!!!!!!!!!!xx    !                                                           ",
   "xxx!! x!xx!x!             !!     !!    !!!!!!!!xx     !                                                           "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                             x                                                ",
   "                                                              x oooo                 x                        ",
   "                                                               x         xx                                   ",
   "                                                              xxxxx  xx        xxx                            ",
   "                                                  x   x      x                                                ",
   "                                                    xx  =   xx                     x                          ",
   "                                                      x                    x!!!x                              ",
   "                                                         o                  xxx        xx                     ",
   "                                                      x                                 x                     ",
   "                                                         o                        x                           ",
   "                                                                                                              ",
   "                                                         o                  x                                 ",
   "                                                      x                     x   xxx                           ",
   "                                                         s  x               xxxvx        x                    ",
   "                                                                    x         x        x   x                  ",
   "                                                 o o  x              x              x    vx                   ",
   "                                                                     x                                        ",
   "                                     x!    x    xxxxx   xxxxxxxx                  xx                          ",
   "             o                     xx!    !x                                         x                        ",
   "                                  xx!     xxx                                 xxx     = xx                    ",
   "         oo      n               xx!!                                                x               !!!!!!   ",
   "             x                     ||         xxx                        xxxxx                       !!!!!!   ",
   "                                        j                                                            !!!!!!   ",
   "         xx                                                      j               x                   !!!!!!   ",
   "      @j                                          x    x    |xxxx|                                   !!!!!!   ",
   "      xxx          !!!             o o xx x       v    v                 x         x x               !!!!!!   ",
   "                   xxxx                   !                               x        x x  xxxx     x   !!!!!!   ",
   "    x             o    o       s   xxx    x                           =                         x x  !!!!!!   ",
   "                               xxxx          x oo x  x x oo x    x oo  x   x                         !!!!!!   ",
   "  x                         xx            x!!x    x!!!!x    x!!!!x    xx   xx                        !!!!!!   ",
   "  xxxxx!!!xx!!!xxxxxxxx!x!x!xx            x  xxxxx    xxxxxx    xxxx       xxxxxxxxxx     xxxxxxxx  xxxxxxx   ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                          ",
   "                                                                                          ",
   "                                                                                          ",
   "                                                                                          ",
   "                                                                                          ",
   "                                                                                          ",
   "                                                                                          ",
   "                                                                                          ",
   "                                                                                          ",
   "                                                                                          ",
   "                                                                                          ",
   "                                                                                          ",
   "                       x    x     xxxxxx     x  x    x      xxx    x   xx       x       x ",
   "                         x        x    x     x  x     x    x  x   x    xx      x x     x  ",
   "             n  n        x        x    x     x  x      x   x  x  x     xx     x   x   x   ",
   "     j                   x        x    x     x  x       x x   x x      xx    x     x x    ",
   "     @                   x        xxxxxx     xxxx        x    xx       xx  x        x     ",
   "  xxxxxxxxxxxxxxxxxxxx                                                                    ",
   "                                                                                          ",
   "                        ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo ",
   "                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ",
   "                                                                                          ",
   "                                                                                          ",
   "                                                                                          "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
