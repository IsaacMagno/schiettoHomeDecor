-- Tabela de produtos
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description TEXT,
  segment VARCHAR(20) NOT NULL CHECK (segment IN ('home_decor', 'semi_joia')),
  category VARCHAR(50) NOT NULL,
  image_url TEXT,
  price DECIMAL(10,2),           -- opcional, pode ser NULL
  featured BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policy de leitura pública
CREATE POLICY "Produtos são públicos" ON products
  FOR SELECT USING (active = true);

-- Seed: produtos Home Decor
INSERT INTO products (name, description, segment, category, featured) VALUES
  ('Vaso Cerâmica Nude', 'Vaso artesanal em cerâmica nas tonalidades nude e terracota. Perfeito para flores secas.', 'home_decor', 'vasos', true),
  ('Vaso Dourado Geométrico', 'Vaso metálico com acabamento dourado e formas geométricas modernas.', 'home_decor', 'vasos', false),
  ('Quadro Botânico', 'Impressão artística em moldura de madeira natural, tema botânico minimalista.', 'home_decor', 'quadros', true),
  ('Quadro Abstrato Rose', 'Arte abstrata em tons rose e champagne, moldura dourada.', 'home_decor', 'quadros', false),
  ('Vela Aromática Lavanda', 'Vela artesanal perfumada com cera de soja, aroma lavanda e baunilha.', 'home_decor', 'velas', true),
  ('Vela Âmbar com Cúpula', 'Conjunto vela + cúpula de vidro, aroma âmbar e sândalo.', 'home_decor', 'velas', false),
  ('Almofada Veludo Rose', 'Almofada 45x45cm em veludo rose gold com zíper invisível.', 'home_decor', 'almofadas', false),
  ('Bandeja Espelhada', 'Bandeja decorativa com espelho e detalhes dourados, 30x20cm.', 'home_decor', 'objetos', true),
  ('Difusor de Ambiente', 'Difusor com varetas, 200ml, aroma floral sofisticado.', 'home_decor', 'objetos', false),
  ('Porta-retratos Dourado', 'Conjunto com 3 porta-retratos em metal dourado, tamanhos variados.', 'home_decor', 'objetos', false);

-- Seed: produtos Semijoias
INSERT INTO products (name, description, segment, category, featured) VALUES
  ('Anel Solitário Banhado Ouro', 'Anel delicado com pedra zircônia, banho em ouro 18k.', 'semi_joia', 'aneis', true),
  ('Anel Minimalista Prata', 'Anel liso em prata 925, minimalista e versátil.', 'semi_joia', 'aneis', false),
  ('Colar Pingente Pérola', 'Colar delicado com pingente de pérola sintética, corrente dourada.', 'semi_joia', 'colares', true),
  ('Colar Choker Dourado', 'Choker elegante em metal dourado com detalhes texturizados.', 'semi_joia', 'colares', false),
  ('Brinco Argola Fina', 'Argolas finas lisas em ouro 18k, 3cm de diâmetro.', 'semi_joia', 'brincos', true),
  ('Brinco Ear Cuff', 'Ear cuff sem furo, formato de folha, banho dourado.', 'semi_joia', 'brincos', false),
  ('Pulseira Elos Dourada', 'Pulseira de elos com fecho de pressão, banho em ouro 18k.', 'semi_joia', 'pulseiras', false),
  ('Pulseira Charm', 'Pulseira regulável com pingente coração, banho rose gold.', 'semi_joia', 'pulseiras', true),
  ('Conjunto Colar + Brinco', 'Conjunto harmonioso com colar e brincos combinando, banho dourado.', 'semi_joia', 'conjuntos', true),
  ('Kit Anéis Empilháveis', 'Kit com 3 anéis para empilhar, ouro e rose gold.', 'semi_joia', 'conjuntos', false);
