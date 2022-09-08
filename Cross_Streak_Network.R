library(RCyjs)
library(tidyr)
rcy <- RCyjs(title="Spelman Garden", quiet=TRUE)
tbl <- read.csv(file = "Cross_Streak_Spelman.csv", sep=",", header=TRUE, stringsAsFactors=FALSE)[1:325,1:3]

x <- drop_na(tbl)
nodes <- unique(c(x$Vertical.Sample, x$Horizontal.Sample))

g <- new("graphNEL", edgemode = "directed")
edgeDataDefaults(g, attr="edgeType") <- "undefined"
nodeDataDefaults(g, attr="distance") <- 0


g <- addNode(nodes, g)
g <- addEdge(x$Vertical.Sample, x$Horizontal.Sample, g)

edgeData(g, x$Vertical.Sample, x$Horizontal.Sample, "edgeType") <- x$Distance
# edgeData(g, tbl$Horizontal.Sample, tbl$Vertical.Sample, "edgeType") <- edgeData(g, tbl$Horizontal.Sample, tbl$Vertical.Sample, "edgeType")[!is.na(edgeData(g, tbl$Horizontal.Sample, tbl$Vertical.Sample, "edgeType"))]
edge_data <- edgeData(g, x$Vertical.Sample, x$Horizontal.Sample, "edgeType")
edge_data <- edge_data[!is.na(edge_data)]


edgeData(g, x$Vertical.Sample, x$Horizontal.Sample, "edgeType") <- edge_data

setGraph(rcy, g)

loadStyleFile(rcy, "style.js")
fit(rcy)
# layout(rcy, "breadthfirst")
layout(rcy, "grid")

setNodeAttributes(rcy, "distance", unique(c(tbl$Horizontal.Sample, tbl$Vertical.Sample)), as.numeric(tbl$Distance))




# saveLayout(rcy, "preferredLayout")
# restoreLayout(rcy, "preferredLayout")
