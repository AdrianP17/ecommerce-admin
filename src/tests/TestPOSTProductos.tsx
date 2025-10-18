import React from "react";
import { usePostData } from "../hooks/general/usePostData";
import { createProducto } from "../services/catalogo/ProductoService";

const TestPostProducto: React.FC = () => {
  const {
    data: nuevoProducto,
    loading,
    error,
  } = usePostData(createProducto);

  // useEffect(() => {
  //   const probarPost = async () => {
  //     console.log("🚀 Enviando nuevo producto...");

  //     const nuevo: NuevoProducto = {
  //       nombre: "Licra deportiva",
  //       descripcion: "Licra deportiva para mujer",
  //       imagenesBase64: [],
  //     };

  //     try {
  //       await postProducto(nuevo);
  //     } catch (err) {
  //       console.error("❌ Error al crear producto:", err);
  //     }
  //   };

  //   probarPost();
  // }, [postProducto]);

  return (
    <div className="p-4 space-y-3">
      <h1 className="text-2xl font-bold">🧪 Test POST Producto</h1>
      <p>Abre la consola para ver el resultado del POST.</p>

      {loading && <p>⏳ Creando producto...</p>}
      {error && <p className="text-red-500">❌ Error al crear producto</p>}
      {nuevoProducto && (
        <div className="text-green-600">
          ✅ Producto creado correctamente:
          <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
            {JSON.stringify(nuevoProducto, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TestPostProducto;
