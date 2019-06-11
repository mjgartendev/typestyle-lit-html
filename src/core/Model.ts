export class Model {
  static entity: String;
  static fields;
  static actions;
  constructor (entity, {props}) {
    Model.entity = entity;
    this._initFields(props.fields);
    this._initActions(props.actions);
  };
  _initFields(fields) {
    fields.forEach((fieldValue, fieldName) => {           
        if (!(fieldName in fields)) {
            Object.defineProperty(this, fieldName, {
                get: () => fields[fieldName],
                set: value => fields[fieldName].set(fieldName, value),
                configurable: true,
                enumerable: true,
            });
        }
    });
  }
  _initActions(actions) {
    actions.forEach((actionValue, actionName) => {           
        if (!(actionName in actions)) {
            Object.defineProperty(this, actionName, {
                get: () => actions[actionName],
                set: value => actions[actionName].set(actionName, value),
                configurable: true,
                enumerable: true,
            });
        }
    });
  }
};