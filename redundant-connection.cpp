#include "iostream"
#include <vector>
using namespace std;

class Disjoint_set {
    vector<int> size;
    vector<int> parent;

  public:
    Disjoint_set(int n) {
        size.resize(n + 1, 1);
        parent.resize(n + 1);

        for (size_t i = 0; i <= n; i++) {
            parent[i] = i;
        }
    }

    int find_ultimate_parent(int node) {
        if (node == parent[node]) {
            return node;
        }

        return parent[node] = find_ultimate_parent(parent[node]);
    }

    void union_by_size(int u, int v) {
        int up_u = find_ultimate_parent(u);
        int up_v = find_ultimate_parent(v);

        if (up_u == up_v) {
            return;
        }

        if (size[up_u] < size[up_v]) {
            parent[up_u] = up_v;
            size[up_v] += size[up_u];
        } else {
            parent[up_v] = up_u;
            size[up_u] += size[up_v];
        }
    }
};

class Solution {
  public:
    vector<int> findRedundantConnection(vector<vector<int>> &edges) {
        vector<int> res;
        Disjoint_set ds(edges.size());

        for (auto edge : edges) {
            int u = edge[0];
            int v = edge[1];

            if (ds.find_ultimate_parent(u) == ds.find_ultimate_parent(v)) {
                res = edge;
                break;
            } else {
                ds.union_by_size(u, v);
            }
        }

        return res;
    }
};

int main() {
    Solution sol;

    vector<vector<int>> edges = {{1, 2}, {1, 3}, {2, 3}};
    vector<int> res = sol.findRedundantConnection(edges);
    cout << "[" << res[0] << ", " << res[1] << "]" << endl;

    edges = {{1, 2}, {2, 3}, {3, 4}, {1, 4}, {1, 5}};
    res = sol.findRedundantConnection(edges);
    cout << "[" << res[0] << ", " << res[1] << "]" << endl;

    edges = {{2, 3}, {5, 2}, {1, 5}, {4, 2}, {4, 1}};
    res = sol.findRedundantConnection(edges);
    cout << "[" << res[0] << ", " << res[1] << "]" << endl;
    return 0;
}
