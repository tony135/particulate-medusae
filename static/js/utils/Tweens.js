var Tweens = App.Tweens = {};

// Tween to target by difference factor
Tweens.factorTween = function (context, defaultFactor) {
  return function (name, target, instanceFactor) {
    var state = context[name];
    if (state == null) { state = context[name] = target; }
    var factor = instanceFactor || defaultFactor;

    return context[name] += (target - state) * factor;
  };
};

// Tween to target by fixed step
Tweens.stepTween = function (context, defaultStep) {
  return function (name, target, instanceStep) {
    var state = context[name];
    if (state == null) { state = context[name] = target; }
    if (state === target) { return state; }
    var step = instanceStep || defaultStep;
    var dir = state < target ? 1 : -1;

    if ((target - state) * dir < step) {
      context[name] = target;
      return state;
    }

    return context[name] += step * dir;
  };
};
