function validateProduct(data) {
  const errors = [];

  if (!data.name || typeof data.name !== 'string') {
    errors.push('Field "name" tidak boleh kosong dan harus berupa string.');
  }

  if (data.price == null || typeof data.price !== 'number' || data.price < 0) {
    errors.push('Field "price" harus berupa angka dan ≥ 0.');
  }

  if (data.stock == null || typeof data.stock !== 'number' || data.stock < 0) {
    errors.push('Field "stock" harus berupa angka dan ≥ 0.');
  }

  if (!data.category || typeof data.category !== 'string') {
    errors.push('Field "category" harus berupa string dan tidak boleh kosong.');
  }

  return errors;
}

module.exports = validateProduct;

