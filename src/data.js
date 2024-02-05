export const creatingJson = [
  {
    id: "1",
    command: "kubectl apply -f ./my-manifest.yaml",
    description: "Create resource from a file.",
  },
  {
    id: "2",
    command: "kubectl apply -f https://git.io/vPieo",
    description: "Create resource(s) from a URL.",
  },
  {
    id: "3",
    command: "kubectl create deployment nginx --image=nginx",
    description: "Start a single instance of nginx.",
  },
  {
    id: "4",
    command: "kubectl apply --server-side -f ./my-manifest.yaml",
    description:
      "Apply changes using server-side apply. This method is more reliable for applying changes.",
  },
];

export const viewingJson = [
  {
    id: "1",
    command: "kubectl get services",
    description: "List all services in the namespace.",
  },
  {
    id: "2",
    command: "kubectl get pods --all-namespaces",
    description: "List all pods in all namespaces.",
  },
  {
    id: "3",
    command: "kubectl get pods -o wide",
    description: "List all pods in the current namespace, with more details.",
  },
  {
    id: "4",
    command: "kubectl get pod my-pod -o yaml",
    description: "Get a pod's YAML.",
  },
  {
    id: "5",
    command:
      "kubectl get pods -o=custom-columns=NAME:.metadata.name,STATUS:.status.phase",
    description: "List pods with custom columns for name and status.",
  },
  {
    id: "6",
    command: "kubectl get pods -l app=nginx",
    description: "List all pods with the label app=nginx.",
  },
];

export const scalingJson = [
  {
    id: "1",
    command: "kubectl scale --replicas=3 rs/foo",
    description: "Scale a replicaset named 'foo' to 3.",
  },
  {
    id: "2",
    command: "kubectl scale --replicas=3 -f foo.yaml",
    description: "Scale a resource specified in foo.yaml to 3.",
  },
  {
    id: "3",
    command: "kubectl scale --current-replicas=2 --replicas=3 deployment/mysql",
    description:
      "If the deployment named mysql's current size is 2, scale mysql to 3.",
  },
  {
    id: "4",
    command: "kubectl scale --replicas=5 rc/foo rc/bar rc/baz",
    description: "Scale multiple replication controllers.",
  },
  {
    id: "5",
    command:
      "kubectl autoscale deployment nginx --min=2 --max=5 --cpu-percent=80",
    description:
      "Automatically scale the deployment named nginx between 2 and 5 replicas based on CPU usage.",
  },
];

export const deletingJson = [
  {
    id: "1",
    command: "kubectl delete -f ./pod.json",
    description: "Delete a pod using the type and name specified in pod.json.",
  },
  {
    id: "2",
    command: "kubectl delete pod,service baz foo",
    description:
      "Delete pods and services with the same names 'baz' and 'foo'.",
  },
  {
    id: "3",
    command: "kubectl delete pods,services -l app=nginx",
    description: "Delete all pods and services with the label app=nginx.",
  },
];

export const managementJson = [
  {
    id: "1",
    command: "kubectl config use-context my-cluster-name",
    description: "Switch to a specific cluster context.",
  },
  {
    id: "2",
    command: "kubectl config set-context --current --namespace=my-namespace",
    description: "Set the default namespace for the current context.",
  },
];
