# 線形代数

## 実装予定の機能

- 行列式に名前をつけて保存
- 行列式の計算
- 行列と行列の積
- ベクトルの線形変換
- 固有値と固有ベクトル
- ベクトルの線形変換

## 構想

よく使う行列式ベクトルは保存しておける。各ページで行列式やベクトルを入力できる。

## ルーティングの構成（予定）

```
/app
  /page.tsx              # ホームページ 行列式の保存
    /determinant
      /page.tsx          # 行列式の計算ページ
    /matrix-multiplication
      /page.tsx          # 行列の積ページ
    /linear-transformation
      /page.tsx          # ベクトルの線形変換ページ
    /eigenvalues
      /page.tsx          # 固有値と固有ベクトルページ
  /components
    Header.tsx           # ヘッダーコンポーネント
    Footer.tsx           # フッターコンポーネント
    Matrix.tsx           # 行列入力コンポーネント
    Vector.tsx           # ベクトル入力コンポーネント
    Result.tsx           # 結果表示コンポーネント
  /lib
    linearAlgebra.ts     # 線形代数の計算ロジック
```
