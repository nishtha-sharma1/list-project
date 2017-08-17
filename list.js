     // Some data we can work with

            const inventors = [
                { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
                { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
                { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
                { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
                { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
                { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
                { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
                { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
                { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
                { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
                { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
                { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
            ];

            const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
            // Array.prototype.filter()
            // 1. Filter the list of inventors for those who were born in the 1500's
            
            function yearBorn (inventor) {
                return inventor.year >= 1500 && inventor.year <= 1600;
            };
            var fifteen = inventors.filter(yearBorn);
            console.log(fifteen);

            // Array.prototype.map()
            // 2. Give us an array of the inventors' first and last names
                var firstLast = inventors.map(function(inventors){
                    console.log(inventors.first + " " + inventors.last);
                });
            // Array.prototype.sort()
            // 3. Sort the inventors by birthdate, oldest to youngest
              var oldestYoungest = inventors.sort(function(a,b){
                    if (a.year > b.year) return 1;
                    if (a.year < b.year) return -1;
                    return 0;    
                }); 
             console.log(oldestYoungest);
            // Array.prototype.reduce(). -- Could not figure this one out; 
            // 4. How many years did all the inventors live?
                 //you add a lived property using the for each statement 
                    inventors.forEach ( function ageCalc (inventor) { 
                    var age = inventor.passed - inventor.year;
                    inventor.lived = age;   
                    }); 
                 
                    console.log(inventors); 
                
                    //var total = inventors.reduce(function (a,b){ 
                    //return a.lived + b.lived; 
                    //},0); 
                    //console.log(total);

            // 5. Sort the inventors by years lived
                var yearsLived = inventors.sort ( function (a,b) {
                    if (a.lived > b.lived) return 1;
                    if (a.lived < b.lived) return -1; 
                    return 0;  
                });
                console.log(yearsLived);
            // 7. sort Exercise
            // Sort the people alphabetically by last name 

            var alphabetical = inventors.sort( function(a,b) {
                var lastA = a.last.toUpperCase();
                var lastB = b.last.toUpperCase();
                if (lastA < lastB ) {
                    return -1;
                } 
                if (lastA > lastB) {
                    return 1; 
                } 
                return 0; 
                });

            console.log(alphabetical);


            // 8. Reduce Exercise
            // Sum up the instances of each of these
            const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick']; 
            var countedEach = data.reduce(function(allDatas,data){ 
                    if (data in allDatas) {
                        allDatas[data]++;
                    } else {
                        allDatas[data]=1; 
                    } 
                    return allDatas; 
                },{}); 
            console.log(countedEach);






