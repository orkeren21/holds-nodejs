import map from 'lodash/map';
import db from '../models';

export default async function truncate() {
  return await Promise.all(
    map(Object.keys(db), (key) => {
      if (['sequelize', 'Sequelize'].includes(key)) return null;
      return db[key].destroy({ where: {}, force: true });
    })
  );
}