// useIncidenciaStore.js
import { create } from "zustand";
import IncidenciaService from "../services/IncidenciaService";

const useIncidenciaStore = create((set) => ({
  incidencias: [],
  fetchIncidencias: async () => {
    try {
      const response = await IncidenciaService.listarIncidencias();
      set({ incidencias: response.data });
    } catch (error) {
      console.error("Error fetching incidencias:", error);
    }
  },
}));

export default useIncidenciaStore;
