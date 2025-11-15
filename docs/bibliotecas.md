# ✅ Validação de Dados com Zod

A biblioteca **Zod** valida os dados recebidos nas requisições HTTP e atribui tipagem a eles.

## 🎯 O que a validação faz?

1. **Captura os dados:**  
Obtém os dados do corpo da requisição via `request.body`.

2. **Valida os campos:**  
Usa Schemas definidos com o Zod para validar os campos obrigatórios e garantir formatos corretos.

3. **Desestruturação segura:**  
Após a validação, os campos são extraídos em variáveis já com tipos seguros (type-safe).

---

## 📝 Schema com Zod:

```typescript
import { z } from 'zod';

const registerBodySchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Formato de email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});
```

