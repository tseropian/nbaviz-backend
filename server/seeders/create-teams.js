const fs = require('fs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const teams = [];

    const buffer = fs.readFileSync('./seeders/teams.csv')
      .toString()
      .split('\r\n');

    buffer.forEach((row) => {
      const team = row.split(',');

      teams.push(
        {
          key: team[0],
          city: team[1],
          name: team[2],
          colour: team[3],
          startSeason: Number(team[4]),
          endSeason: Number(team[5]),
          conference: team[6],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      );
    });

    return queryInterface.bulkInsert('Teams', teams);
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Teams', null, {}),
};
/*

National Basketball Association Team Logos
Atlanta Hawks
since 1968/69

Boston Celtics
since 1946/47

Brooklyn Nets
since 2012/13

Charlotte Hornets
since 2014/15

Chicago Bulls
since 1966/67

Cleveland Cavaliers
since 1970/71

Dallas Mavericks
since 1980/81

Denver Nuggets
since 1976/77

Detroit Pistons
since 1957/58

Golden State Warriors
since 1971/72

Houston Rockets
since 1971/72

Indiana Pacers
since 1976/77

Los Angeles Clippers
since 1984/85

Los Angeles Lakers
since 1960/61

Memphis Grizzlies
since 2001/02

Miami Heat
since 1988/89

Milwaukee Bucks
since 1968/69

Minnesota Timberwolves
since 1989/90

New Orleans Pelicans
since 2013/14

New York Knicks
since 1946/47

Oklahoma City Thunder
since 2008/09

Orlando Magic
since 1989/90

Philadelphia 76ers
since 1963/64

Phoenix Suns
since 1968/69

Portland Trail Blazers
since 1970/71

Sacramento Kings
since 1985/86

San Antonio Spurs
since 1976/77

Toronto Raptors
since 1995/96

Utah Jazz
since 1979/80

Washington Wizards
since 1997/98

Baltimore Bullets
1963/64 - 1972/73

Baltimore Bullets
1947/48 - 1953/54

Buffalo Braves
1970/71 - 1977/78

Capital Bullets
1973/74

Charlotte Bobcats
2004/05 - 2013/14

Charlotte Hornets
1988/89 - 2001/02

Chicago Packers
1961/62

Chicago Stags
1946/47 - 1949/50

Chicago Zephyrs
1962/63

Cincinnati Royals
1957/58 - 1970/71

Cleveland Rebels
1946/47

Denver Nuggets
1949/50

Fort Wayne Pistons
1941/42 - 1956/57

Kansas City Kings
1975/76 - 1984/85

Kansas City-Omaha Kings
1972/73 - 1974/75

Milwaukee Hawks
1951/52 - 1954/55

Minneapolis Lakers
1947/48 - 1959/60

New Jersey Nets
1977/78 - 2011/12

New Orleans Hornets
2002/03 - 2012/13

New Orleans Jazz
1974/75 - 1978/79

New York Nets
1976/77

NO/Oklahoma City Hornets
2005/06 - 2006/07

Philadelphia Warriors
1946/47 - 1961/62

Providence Steam Rollers
1946/47 - 1948/49

Rochester Royals
1945/46 - 1956/57

San Diego Clippers
1978/79 - 1983/84

San Diego Rockets
1967/68 - 1970/71

San Francisco Warriors
1962/63 - 1970/71

Seattle Supersonics
1967/68 - 2007/08

St. Louis Bombers
1946/47 - 1949/50

St. Louis Hawks
1955/56 - 1967/68

Syracuse Nationals
1946/47 - 1962/63

Toronto Huskies
1946/47

Tri-Cities Blackhawks
1949/50 - 1950/51

Vancouver Grizzlies
1995/96 - 2000/01

Washington Bullets
1974/75 - 1996/97

*/
