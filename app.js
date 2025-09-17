document.addEventListener('DOMContentLoaded', () => {

    const originalTreeData = {
        "name": "Falcon College Alumni",
        "children": [
            {
                "name": "Technology",
                "children": [
                    {
                        "name": "Software Development",
                        "children": [
                            {
                                "name": "Software Engineer",
                                "alumni": [
                                    { "name": "Harry Potter", "gradYear": 2012, "linkedin": "https://linkedin.com/in/harrypotter", "image": "https://randomuser.me/api/portraits/men/1.jpg", "country": "United States" },
                                    { "name": "Katniss Everdeen", "gradYear": 2015, "linkedin": "https://linkedin.com/in/katnisseverdeen", "image": "https://randomuser.me/api/portraits/women/2.jpg", "country": "United States" },
                                    { "name": "Jon Snow", "gradYear": 2011, "linkedin": "https://linkedin.com/in/jonsnow", "image": "https://randomuser.me/api/portraits/men/3.jpg", "country": "United Kingdom" },
                                    { "name": "Hermione Granger", "gradYear": 2013, "linkedin": "https://linkedin.com/in/hermionegranger", "image": "https://randomuser.me/api/portraits/women/4.jpg", "country": "United Kingdom" },
                                    { "name": "Elsa", "gradYear": 2010, "linkedin": "https://linkedin.com/in/elsa", "image": "https://randomuser.me/api/portraits/women/5.jpg", "country": "United States" },
                                    { "name": "Anakin Skywalker", "gradYear": 2008, "linkedin": "https://linkedin.com/in/anakinskywalker", "image": "https://randomuser.me/api/portraits/men/6.jpg", "country": "United States" }
                                ]
                            },
                            {
                                "name": "Data Scientist",
                                "alumni": [
                                    { "name": "Luke Skywalker", "gradYear": 2014, "linkedin": "https://linkedin.com/in/lukeskywalker", "image": "https://randomuser.me/api/portraits/men/7.jpg", "country": "United States" },
                                    { "name": "Daenerys Targaryen", "gradYear": 2016, "linkedin": "https://linkedin.com/in/daenerystargaryen", "image": "https://randomuser.me/api/portraits/women/8.jpg", "country": "United States" },
                                    { "name": "Tony Soprano", "gradYear": 1995, "linkedin": "https://linkedin.com/in/tonysoprano", "image": "https://randomuser.me/api/portraits/men/16.jpg", "country": "United States" },
                                    { "name": "Walter White", "gradYear": 1985, "linkedin": "https://linkedin.com/in/walterwhite", "image": "https://randomuser.me/api/portraits/men/24.jpg", "country": "India" }
                                ]
                            },
                            {
                                "name": "Database Administrator",
                                "alumni": [
                                    { "name": "Gollum", "gradYear": 2005, "linkedin": "https://linkedin.com/in/gollum", "image": "https://randomuser.me/api/portraits/men/27.jpg", "country": "United Kingdom" },
                                    { "name": "Frodo Baggins", "gradYear": 2007, "linkedin": "https://linkedin.com/in/frodobaggins", "image": "https://randomuser.me/api/portraits/men/28.jpg", "country": "India" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Cybersecurity",
                        "children": [
                            {
                                "name": "Security Analyst",
                                "alumni": [
                                    { "name": "Captain America", "gradYear": 2017, "linkedin": "https://linkedin.com/in/captainamerica", "image": "https://randomuser.me/api/portraits/men/9.jpg", "country": "United States" },
                                    { "name": "Leia Organa", "gradYear": 2019, "linkedin": "https://linkedin.com/in/leiaorgana", "image": "https://randomuser.me/api/portraits/women/10.jpg", "country": "United States" },
                                    { "name": "James Bond", "gradYear": 2002, "linkedin": "https://linkedin.com/in/jamesbond", "image": "https://randomuser.me/api/portraits/men/29.jpg", "country": "United Kingdom" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "IT Management",
                        "children": [
                            {
                                "name": "IT Project Manager",
                                "alumni": [
                                    { "name": "Mr. Incredible", "gradYear": 2004, "linkedin": "https://linkedin.com/in/mrincredible", "image": "https://randomuser.me/api/portraits/men/30.jpg", "country": "United States" }
                                ]
                            },
                            {
                                "name": "Network Administrator",
                                "alumni": [
                                    { "name": "Neo", "gradYear": 2009, "linkedin": "https://linkedin.com/in/neo", "image": "https://randomuser.me/api/portraits/men/31.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Healthcare",
                "children": [
                    {
                        "name": "Medicine",
                        "children": [
                            {
                                "name": "Physician",
                                "alumni": [
                                    { "name": "Dr. Strange", "gradYear": 2005, "linkedin": "https://linkedin.com/in/drstrange", "image": "https://randomuser.me/api/portraits/men/11.jpg", "country": "United States" },
                                    { "name": "Dr. Meredith Grey", "gradYear": 2009, "linkedin": "https://linkedin.com/in/drmeredithgrey", "image": "https://randomuser.me/api/portraits/women/12.jpg", "country": "United States" },
                                    { "name": "Dr. Alex Kim", "gradYear": 2002, "linkedin": "https://linkedin.com/in/dralexkim", "image": "https://randomuser.me/api/portraits/men/7.jpg", "country": "South Korea" }
                                ]
                            },
                            {
                                "name": "Surgeon",
                                "alumni": [
                                    { "name": "Hawkeye Pierce", "gradYear": 2003, "linkedin": "https://linkedin.com/in/hawkeyepierce", "image": "https://randomuser.me/api/portraits/men/14.jpg", "country": "United States" },
                                    { "name": "Dr. House", "gradYear": 2001, "linkedin": "https://linkedin.com/in/drhouse", "image": "https://randomuser.me/api/portraits/men/32.jpg", "country": "United Kingdom" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Nursing & Allied Health",
                        "children": [
                            {
                                "name": "Registered Nurse",
                                "alumni": [
                                    { "name": "Nurse Ratched", "gradYear": 2001, "linkedin": "https://linkedin.com/in/nurseratched", "image": "https://randomuser.me/api/portraits/women/13.jpg", "country": "United States" },
                                    { "name": "Florence Nightingale", "gradYear": 1850, "linkedin": "https://linkedin.com/in/florencenightingale", "image": "https://randomuser.me/api/portraits/women/33.jpg", "country": "United Kingdom" }
                                ]
                            },
                            {
                                "name": "Physical Therapist",
                                "alumni": [
                                    { "name": "Dr. Crusher", "gradYear": 2008, "linkedin": "https://linkedin.com/in/drcrusher", "image": "https://randomuser.me/api/portraits/women/34.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Finance",
                "children": [
                    {
                        "name": "Investment Banking",
                        "children": [
                            {
                                "name": "Financial Analyst",
                                "alumni": [
                                    { "name": "Gordon Gekko", "gradYear": 2000, "linkedin": "https://linkedin.com/in/gordongekko", "image": "https://randomuser.me/api/portraits/men/15.jpg", "country": "United States" },
                                    { "name": "Chris Green", "gradYear": 2008, "linkedin": "https://linkedin.com/in/chrisgreen", "image": "https://randomuser.me/api/portraits/men/5.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Accounting",
                        "children": [
                            {
                                "name": "CPA",
                                "alumni": [
                                    { "name": "Sarah Brown", "gradYear": 2005, "linkedin": "https://linkedin.com/in/sarahbrown", "image": "https://randomuser.me/api/portraits/women/6.jpg", "country": "United States" }
                                ]
                            },
                            {
                                "name": "Auditor",
                                "alumni": [
                                    { "name": "Bilbo Baggins", "gradYear": 1999, "linkedin": "https://linkedin.com/in/bilbobaggins", "image": "https://randomuser.me/api/portraits/men/35.jpg", "country": "United Kingdom" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Wealth Management",
                        "children": [
                            {
                                "name": "Wealth Advisor",
                                "alumni": [
                                    { "name": "Bruce Wayne", "gradYear": 1990, "linkedin": "https://linkedin.com/in/brucewayne", "image": "https://randomuser.me/api/portraits/men/36.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Education",
                "children": [
                    {
                        "name": "Higher Education",
                        "children": [
                            {
                                "name": "Professor",
                                "alumni": [
                                    { "name": "Professor Dumbledore", "gradYear": 1980, "linkedin": "https://linkedin.com/in/professordumbledore", "image": "https://randomuser.me/api/portraits/men/17.jpg", "country": "United Kingdom" },
                                    { "name": "Indiana Jones", "gradYear": 1978, "linkedin": "https://linkedin.com/in/indianajones", "image": "https://randomuser.me/api/portraits/men/37.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "K-12 Education",
                        "children": [
                            {
                                "name": "Teacher",
                                "alumni": [
                                    { "name": "Miss Frizzle", "gradYear": 1990, "linkedin": "https://linkedin.com/in/missfrizzle", "image": "https://randomuser.me/api/portraits/women/18.jpg", "country": "United States" },
                                    { "name": "Mr. Feeny", "gradYear": 1975, "linkedin": "https://linkedin.com/in/mrfeeny", "image": "https://randomuser.me/api/portraits/men/38.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Creative Arts & Media",
                "children": [
                    {
                        "name": "Film & Television",
                        "children": [
                            {
                                "name": "Director",
                                "alumni": [
                                    { "name": "Steven Spielberg", "gradYear": 1975, "linkedin": "https://linkedin.com/in/stevenspielberg", "image": "https://randomuser.me/api/portraits/men/19.jpg", "country": "United States" }
                                ]
                            },
                            {
                                "name": "Screenwriter",
                                "alumni": [
                                    { "name": "Woody Allen", "gradYear": 1965, "linkedin": "https://linkedin.com/in/woodyallen", "image": "https://randomuser.me/api/portraits/men/39.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Publishing",
                        "children": [
                            {
                                "name": "Author",
                                "alumni": [
                                    { "name": "J.K. Rowling", "gradYear": 1985, "linkedin": "https://linkedin.com/in/jkrowling", "image": "https://randomuser.me/api/portraits/women/20.jpg", "country": "United Kingdom" }
                                ]
                            },
                            {
                                "name": "Editor",
                                "alumni": [
                                    { "name": "E.B. White", "gradYear": 1945, "linkedin": "https://linkedin.com/in/ebwhite", "image": "https://randomuser.me/api/portraits/men/40.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Professional Services",
                "children": [
                    {
                        "name": "Legal",
                        "children": [
                            {
                                "name": "Lawyer",
                                "alumni": [
                                    { "name": "Atticus Finch", "gradYear": 1950, "linkedin": "https://linkedin.com/in/atticusfinch", "image": "https://randomuser.me/api/portraits/men/21.jpg", "country": "United States" },
                                    { "name": "Elle Woods", "gradYear": 2003, "linkedin": "https://linkedin.com/in/ellewoods", "image": "https://randomuser.me/api/portraits/women/41.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Consulting",
                        "children": [
                            {
                                "name": "Management Consultant",
                                "alumni": [
                                    { "name": "Sherlock Holmes", "gradYear": 1980, "linkedin": "https://linkedin.com/in/sherlockholmes", "image": "https://randomuser.me/api/portraits/men/22.jpg", "country": "United Kingdom" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Manufacturing & Engineering",
                "children": [
                    {
                        "name": "Aerospace",
                        "children": [
                            {
                                "name": "Aerospace Engineer",
                                "alumni": [
                                    { "name": "Tony Stark", "gradYear": 1995, "linkedin": "https://linkedin.com/in/tonystark", "image": "https://randomuser.me/api/portraits/men/23.jpg", "country": "United States" }
                                ]
                            },
                            {
                                "name": "Pilot",
                                "alumni": [
                                    { "name": "Han Solo", "gradYear": 1988, "linkedin": "https://linkedin.com/in/hansolo", "image": "https://randomuser.me/api/portraits/men/42.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Automotive",
                        "children": [
                            {
                                "name": "Mechanical Engineer",
                                "alumni": [
                                    { "name": "Walter White", "gradYear": 1985, "linkedin": "https://linkedin.com/in/walterwhite", "image": "https://randomuser.me/api/portraits/men/24.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Government & Public Sector",
                "children": [
                    {
                        "name": "Politics",
                        "children": [
                            {
                                "name": "Politician",
                                "alumni": [
                                    { "name": "Frank Underwood", "gradYear": 1982, "linkedin": "https://linkedin.com/in/frankunderwood", "image": "https://randomuser.me/api/portraits/men/25.jpg", "country": "United States" }
                                ]
                            },
                            {
                                "name": "Senator",
                                "alumni": [
                                    { "name": "Sheldon Cooper", "gradYear": 2005, "linkedin": "https://linkedin.com/in/sheldoncooper", "image": "https://randomuser.me/api/portraits/men/43.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Law Enforcement",
                        "children": [
                            {
                                "name": "Police Officer",
                                "alumni": [
                                    { "name": "Sergeant Brody", "gradYear": 2000, "linkedin": "https://linkedin.com/in/sergeantbrody", "image": "https://randomuser.me/api/portraits/men/26.jpg", "country": "United States" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const initialTreeData = {
        "name": "Falcon College Alumni",
        "children": originalTreeData.children.map(d => ({
            "name": d.name,
            "children": null
        }))
    };

    const width = 1200;
    const height = 800;

    let svg = d3.select("#tree-container").append("svg")
        .attr("width", "100%")
        .attr("height", "100%");

    let g = svg.append("g").attr("transform", "translate(50,50)");

    let tree = d3.tree()
        .size([width - 200, height - 100]);

    const backButton = document.getElementById('backButton');
    let currentData = initialTreeData;

    function updateTree(sourceData) {
        g.selectAll('*').remove();

        const root = d3.hierarchy(sourceData);
        const nodes = tree(root);

        const links = g.selectAll(".link")
            .data(nodes.links())
            .enter().append("path")
            .attr("class", "link")
            .attr("d", d3.linkVertical()
                .x(d => d.x)
                .y(d => d.y));

        const node = g.selectAll(".node")
            .data(nodes.descendants())
            .enter().append("g")
            .attr("class", d => `node ${d.children ? 'node--internal' : 'node--leaf'}`)
            .attr("transform", d => `translate(${d.x},${d.y})`);

        node.append("circle")
            .attr("r", 5)
            .on("click", (event, d) => {
                const fullNode = findNode(originalTreeData, d.data.name);

                if (fullNode.children && !d.children) {
                    currentData = fullNode;
                    updateTree(currentData);
                    backButton.style.display = 'block';
                } else if (d.data.alumni) {
                    displayAlumniDetails(d.data.alumni);
                }
            });

        node.append("text")
            .attr("dy", "1.5em")
            .attr("x", 0)
            .attr("text-anchor", "middle")
            .text(d => d.data.name);

        const bbox = g.node().getBBox();
        svg.attr("width", bbox.x + bbox.width + 100).attr("height", bbox.y + bbox.height + 100);

        searchTree(document.getElementById('searchInput').value);
    }

    function findNode(data, name) {
        if (data.name === name) return data;
        if (data.children) {
            for (let child of data.children) {
                const found = findNode(child, name);
                if (found) return found;
            }
        }
        return null;
    }

    backButton.addEventListener('click', () => {
        currentData = initialTreeData;
        updateTree(currentData);
        backButton.style.display = 'none';
        displayAlumniDetails(null);
    });

    function displayAlumniDetails(alumniList) {
        const sidebar = document.getElementById('alumni-details-sidebar');
        sidebar.innerHTML = '<h2>Alumni Details</h2>';
        if (alumniList && alumniList.length > 0) {
            alumniList.forEach(alumnus => {
                const profileDiv = document.createElement('div');
                profileDiv.classList.add('profile-card');

                const profileImg = document.createElement('img');
                profileImg.src = alumnus.image;
                profileImg.alt = alumnus.name;
                profileImg.classList.add('profile-img');
                profileDiv.appendChild(profileImg);

                const profileInfoDiv = document.createElement('div');
                profileInfoDiv.classList.add('profile-info');
                profileInfoDiv.innerHTML = `
                    <h3>${alumnus.name}</h3>
                    <p><strong>Graduation Year:</strong> ${alumnus.gradYear}</p>
                    <p><strong>Country:</strong> ${alumnus.country}</p>
                    <p><a href="${alumnus.linkedin}" target="_blank">Connect on LinkedIn</a></p>
                `;
                profileDiv.appendChild(profileInfoDiv);
                sidebar.appendChild(profileDiv);
            });
        } else {
            sidebar.innerHTML += '<p>Click on a job title to see alumni details.</p>';
        }
    }

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        searchTree(searchInput.value);
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchTree(searchInput.value);
        }
    });

    function searchTree(searchTerm) {
        d3.selectAll('.node circle').classed('found', false);
        if (!searchTerm) {
            return;
        }

        const flattenedTree = d3.hierarchy(originalTreeData).descendants();
        const foundNodes = flattenedTree.filter(d => {
            const nodeName = d.data.name.toLowerCase();
            const alumniNames = d.data.alumni ? d.data.alumni.map(a => a.name.toLowerCase()) : [];
            const term = searchTerm.toLowerCase();
            return nodeName.includes(term) || alumniNames.some(name => name.includes(term));
        });

        const displayedNodes = d3.selectAll(".node").data();
        foundNodes.forEach(foundNode => {
            const match = displayedNodes.find(d => d.data.name === foundNode.data.name);
            if (match) {
                d3.select(match.data.node).select("circle").classed("found", true);
            }
        });
    }

    updateTree(currentData);
});
