import { useEffect, useState } from "react";
import type { Project } from "../types";
import { getProjects } from "../services/api";

function main_ptBR() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects);
      setLoading(false);
    });
  }, []);

  return <></>;
}

export default main_ptBR;
