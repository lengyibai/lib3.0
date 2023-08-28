# $groupArrayByKey

<ContainerBox title="介绍">
<template #desc>
将数组对象按照指定键值整理成一个以键值为键名的对象
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
const arr = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "GZ", name: "TYJ", age: 25 },
  { area: "SZ", name: "AAA", age: 23 },
  { area: "FS", name: "BBB", age: 21 },
  { area: "SZ", name: "CCC", age: 19 },
];
$groupArrayByKey(arr, "area");
/*
{
  GZ: [
    { area: 'GZ', name: 'YZW', age: 27 },
    { area: 'GZ', name: 'TYJ', age: 25 }
  ],
  SZ: [
    { area: 'SZ', name: 'AAA', age: 23 },
    { area: 'SZ', name: 'CCC', age: 19 }
  ],
  FS: [ { area: 'FS', name: 'BBB', age: 21 } ]
}
 */
```

<ShowCode>
<template #codes>

```js
export const $groupArrayByKey = (arr = [], key) => {
  return key
    ? arr.reduce(
        (t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t),
        {}
      )
    : {};
};
```

</template>
</ShowCode>
</ContainerBox>
