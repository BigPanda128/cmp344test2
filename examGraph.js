//Ryan Postma
//CMP344
//Exam 2
//graphs question

load("graph.js");

g = new Graph(6);//create a 6 vertx graph

//ordered the edges so that there is two ways to get from 0 to 5. 
//one way takes 3 steps, the other takes 4
//the shorter path is 0-3-2-5
//the longer is 0-1-4-2-5
g.addEdge(0,1);

g.addEdge(0,3);

g.addEdge(1,4);

g.addEdge(2,3);

g.addEdge(2,4);

g.addEdge(2,5);

g.bfs(0);

var paths = g.pathTo(0,5);

g.showPath(paths);

print("\n");
