// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000201010101010b0a0103070f0f0f0f0f0f0f0f04070f0f0f0f0f0f0f0f04070f0f0f0f0f0f0f0f04070f0f0f0f0f0f0f0e04070f0f0f0f0f0f0f0e04070f0f0f0f0d0d0d0804060c090c0c0c0c0c0c05`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . 2 2 
2 . . . . . . . 2 2 
2 . . . . 2 2 . 2 2 
2 2 . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorLight2,sprites.dungeon.stairNorth,myTiles.tile1,myTiles.tile2,sprites.dungeon.greenOuterSouth1,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenEast,sprites.dungeon.floorDark2], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a00080007080c08080808080c05040a0909090a0a090906040a0909090a0a09090b040a0909090a0a09090b040a090909090909090b040a090909090909090b040a0a0a0a0a0a09090603020202020202020201`, img`
2 2 . 2 2 2 2 2 . 2 
2 2 . . . 2 2 . . 2 
2 2 . . . 2 2 . . . 
2 2 . . . 2 2 . . . 
2 2 . . . . . . . . 
2 2 . . . . . . . . 
2 2 2 2 2 2 2 . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark2,sprites.dungeon.floorLight2,myTiles.tile3,sprites.dungeon.stairSouth], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`32000800020303030300000000000000000000000000000303030303030303030303030303030303030303030303030303030000000007010101010100000000000000000000010101010101010101010101010101010101010101010101010101010101010101000a010101010101000000000000010101010101010101010101010101010101010101010101010101010101010101010101000601010101010101010000010101010101010101010101010c0c0c0c0c0c0c0101010101010101010c0c0c0c010101010100000c01010101010101010101010101010101010101010c0c000000000000010c0c0101010c0c0c0c0c0101010c010101010900000c0101010101010101010101010101010101010c00000000010101010101010c0c0c0101010101010101010c0c0101080000000c010101010101010101010101010101010c0000000000010b010101010101010101010101010101010101010c01090000000005050505050505050505050505050505050000000000000000000000000000000000000000000000000000000504`, img`
22222222222222222222222222222222222222222222222222
.....22.........222...........................2..2
2.....22.....222..2............................2.2
2......222222...........2222222.........2222....22
22.......22...........222.....22....22222..22....2
2.2..................22..........222.........22...
2..2.................2...........22...........22.2
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorMixed,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.stairEast,sprites.dungeon.stairWest,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.chestClosed,sprites.dungeon.floorDark3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
