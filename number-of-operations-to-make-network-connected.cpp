#include <iostream>
#include <vector>
using namespace std;

class Solution {
    void dfs_each(int node, vector<vector<int>> adj, vector<bool> &visited) {
        visited[node] = true;
        for (int u : adj[node]) {
            if (!visited[u]) {
                dfs_each(u, adj, visited);
            }
        }
    }

  public:
    int makeConnected(int n, vector<vector<int>> &connections) {
        if (connections.size() < n - 1)
            return -1;

        vector<vector<int>> adj(n);
        for (vector<int> edge : connections) {
            int u = edge[0];
            int v = edge[1];
            adj[u].push_back(v);
            adj[v].push_back(u);
        }

        int count = 0;
        vector<bool> visited(n, false);
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                ++count; // count unconnected components
                dfs_each(i, adj, visited);
            }
        }

        return count - 1;
    }
};

int main() {
    Solution sol;
    int n = 4;
    vector<vector<int>> connections = {{0, 1}, {0, 2}, {1, 2}};

    int count = sol.makeConnected(n, connections);
    cout << count << endl;

    n = 6;
    connections = {{0, 1}, {0, 2}, {0, 3}, {1, 2}, {1, 3}};
    count = sol.makeConnected(n, connections);
    cout << count << endl;

    n = 6;
    connections = {{0, 1}, {0, 2}, {0, 3}, {1, 2}};
    count = sol.makeConnected(n, connections);
    cout << count << endl;
    return 0;
}
